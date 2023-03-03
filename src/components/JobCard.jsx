import "./JobCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const JobCard = ({ logo, company, position, project, content }) => {
  return (
    <div className="job-container">
      <img src={logo} className="job-img" alt={company}></img>
      <h3 className="job-company">{company}</h3>
      <FontAwesomeIcon icon={faLaptopCode} className="job-icon" />
      <p className="job-position">
        <strong>{position}</strong>
      </p>
      <p className="job-project">{project}</p>
      <ul className="job-content">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;
