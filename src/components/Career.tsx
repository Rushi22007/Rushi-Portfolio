import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer Trainee</h4>
                <h5>HackerRank</h5>
              </div>
              <h3>DEC 2025</h3>
            </div>
            <p>
              Java Developer Intern with practical experience in developing
              backend solutions using Core Java and OOP. Passionate about
              writing clean code and building scalable applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>CodeTech</h5>
              </div>
              <h3>JAN 2026</h3>
            </div>
            <p>
              Processed and analyzed datasets to generate actionable insights
              improving decision-making. Developed dashboards using Power
              BI/Tableau, enhancing data visibility and reporting efficiency.
              Optimized SQL queries and automated workflows using Python,
              reducing manual effort.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Intern</h4>
                <h5>CodeTech</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Processed and analyzed datasets to generate actionable insights
              improving decision-making. Developed dashboards using Power
              BI/Tableau, enhancing data visibility and reporting efficiency.
              Optimized SQL queries and automated workflows using Python,
              reducing manual effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
