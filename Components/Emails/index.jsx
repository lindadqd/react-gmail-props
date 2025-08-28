import Email from "../Email"

function Emails({filteredEmails, toggleRead, toggleStar, toggleSelectMail}) {
    return (
        <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <>
            <Email index={index} email={email} toggleRead={toggleRead}  toggleStar={toggleStar} toggleSelectMail={toggleSelectMail}/>
            </>
          ))}
        </ul>
      </main>
    )
}

export default Emails