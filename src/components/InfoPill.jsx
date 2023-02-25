import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InfoPill.css";

const InfoPill = ({ icon, content }) => {
  return (
    <div className="info-container">
      <span className="info-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="info-text">{content}</span>
    </div>
  );
};

export default InfoPill;
