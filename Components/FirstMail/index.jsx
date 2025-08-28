



function FirstMail({backArrow, downloadButton, rubbishButton, rateStarButton, zoomImage,backButton, toggleSelectMail}) {
    return (
      <main className="email-view">
        <nav className="email-toolbar">
          <ul>
            <li>
              <img className="icon" src={backButton} alt="back button" onClick={() => toggleSelectMail(null)} />
            </li>
            <li>
              <img className="icon" src={backArrow} alt="reply button" />
            </li>
            <li>
              <img className="icon" src={downloadButton} alt="archive button" />
            </li>
            <li>
              <img className="icon" src={rubbishButton} alt="delete button" />
            </li>
          </ul>
          <div className="space"></div>
          <div>
            <p>1 of 5</p>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </nav>
        <article className="email-content">
          <div className="title">
            <h1>Cloud Recording - Nicolas Marcoras Personal Meeting Room is available</h1>
          </div>
          <header className="email-content--header">
            <div className="avatar"></div>
            <div className="email-info">
              <div className="sender-info">
                <h2>Zoom</h2>
                <em>&lt;no-reply@zoom.com&gt;</em>
              </div>
              <div className="user-info">
                <p>
                  to me <em>&lt;linda@boolean.co.uk&gt;</em>
                </p>
              </div>
            </div>
            <div className="date-info">
              <p>17 March 2021, 09:33</p>
            </div>
            <div className="email-action-icons">
              <ul>
                <li>
                  <img className="icon" src={backArrow} alt="reply button" />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rateStarButton}
                    alt="star button"
                  />
                </li>
                <li>
                  <img
                    className="icon"
                    src={rubbishButton}
                    alt="delete button"
                  />
                </li>
              </ul>
            </div>
          </header>
          <section className="email-body">
            <div className="content">
              <img src={zoomImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
        </article>
      </main>
    )
  }

  export default FirstMail