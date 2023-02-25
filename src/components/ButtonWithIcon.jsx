import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ButtonWithIcon.css";

const ButtonWithIcon = ({
  icon,
  handleOnClick,
  className = "",
  text,
  animate = "",
  disabled = false,
}) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      <span className="btn-text">{text}</span>
      <FontAwesomeIcon icon={icon} className={animate} />
    </button>
  );
};

export default ButtonWithIcon;
