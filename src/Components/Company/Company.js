export default function Company() {
  return (
    <>
      <div className="company-header">
        <div className="company-header-content">
          <h5>How does a job at Output sounds like?</h5>
          <a href="#">Join here</a>
        </div>
      </div>
      <div className="company-behaviours">
        <div className="company-behaviours-head">
          <h1>Our behaviours</h1>
        </div>
        <div className="company-behaviours-body">
          <div className="company-behaviours-body-card">
            <img src="https://i.postimg.cc/9Myfd9XB/brainstorm.png" alt="" />
            <h3>Ownership</h3>
            <p>
              We prioritise long-term value over short-term goals and embrace
              any task.
            </p>
          </div>
          <div className="company-behaviours-body-card">
            <img src="https://i.postimg.cc/mDWLgr31/puzzle.png" alt="" />
            <h3>Collaboration</h3>
            <p>
              We eagerly request and offer help, and we appreciate diverse
              viewpoints and healthy debate.
            </p>
          </div>
          <div className="company-behaviours-body-card">
            <img src="https://i.postimg.cc/zX2qR7Sr/view.png" alt="" />
            <h3>Transparency</h3>
            <p>
              We share motives, decisions, knowledge, issues, and data with
              everyone who needs to know.
            </p>
          </div>
          <div className="company-behaviours-body-card">
            <img src="https://i.postimg.cc/QdgSy44L/hand.png" alt="" />
            <h3>Respect</h3>
            <p>
              We show up on time, listen attentively, assume good intent, and
              contribute with caring candour.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
