import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
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
                <h4>DevOps Engineer Intern</h4>
                <h5>Ten Tech</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Delivered hands-on projects across Linux, Git, CI/CD pipelines, Docker,
              Kubernetes, Cloud basics, and Infrastructure Automation. Set up Jenkins CI/CD, deployed Docker apps, and explored AWS & Terraform.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, CSE</h4>
                <h5>Vignana Bharathi Institute of Technology</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Relevant Coursework: Operating Systems, Computer Networks, Cloud Computing, Database Management Systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Various</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              AWS Academy Cloud Foundations (Amazon Web Services), Cisco Networking Academy, Cybersecurity Virtual Internship, AI/ML Virtual Internship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
