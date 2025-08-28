import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Header from '../Components/Header'
import LeftMenu from '../Components/Left-Menu'
import Emails from '../Components/Emails'
import FirstMail from '../Components/FirstMail'
import SecondMail from '../Components/SecondMail'
import NotionMail from '../Components/NotionMail'
import CalendlyMail from '../Components/CalendlyMail'
import PatrickMail from '../Components/PatrickMail'

import zoomImage from './assets/images/zoom-logo-png.webp'
import backArrow from './assets/icons/back-arrow.png'
import downloadButton from './assets/icons/download-button.png'
import rateStarButton from './assets/icons/rate-star-button.png'
import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
import backButton from './assets/icons/back-button.webp'
import booleanImage from './assets/images/boolean.png'
import calendlypic from './assets/images/Teams.png'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [selectedEmail, setSelectedEmail] = useState(null)

 

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  const toggleSelectMail = targetEmail => {
    setSelectedEmail(targetEmail)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">

      <Header />
      <LeftMenu currentTab={ currentTab} setCurrentTab={setCurrentTab} setHideRead = {setHideRead} unreadEmails = {unreadEmails} starredEmails = {starredEmails} hideRead = {hideRead}/>
      
  {selectedEmail === null ? (
    <Emails
      filteredEmails={filteredEmails}
      toggleRead={toggleRead}
      toggleStar={toggleStar}
      toggleSelectMail={toggleSelectMail}
    />
  ) : selectedEmail.id === 1 ? (
    <FirstMail
      backArrow={backArrow}
      downloadButton={downloadButton}
      rubbishButton={rubbishButton}
      rateStarButton={rateStarButton}
      zoomImage={zoomImage}
      backButton={backButton}
      toggleSelectMail={toggleSelectMail}
    />
  ) : selectedEmail.id === 2 ?(
    <SecondMail
      backArrow={backArrow}
      downloadButton={downloadButton}
      rubbishButton={rubbishButton}
      rateStarButton={rateStarButton}
      zoomImage={zoomImage}
      backButton={backButton}
      toggleSelectMail={toggleSelectMail}
    />
  ) : selectedEmail.id === 3 ? (
    <NotionMail
      backArrow={backArrow}
      downloadButton={downloadButton}
      rubbishButton={rubbishButton}
      rateStarButton={rateStarButton}
      booleanImage={booleanImage}
      backButton={backButton}
      toggleSelectMail={toggleSelectMail}
    />  
  ) : selectedEmail.id === 4 ? (
    <CalendlyMail
      backArrow={backArrow}
      downloadButton={downloadButton}
      rubbishButton={rubbishButton}
      rateStarButton={rateStarButton}
      calendlypic={calendlypic}
      backButton={backButton}
      toggleSelectMail={toggleSelectMail}
    />  
  ) : (
    <PatrickMail
      backArrow={backArrow}
      downloadButton={downloadButton}
      rubbishButton={rubbishButton}
      rateStarButton={rateStarButton}
      patrickpic={calendlypic}
      backButton={backButton}
      toggleSelectMail={toggleSelectMail}
    />
  )}
    </div>

  )
}

export default App
