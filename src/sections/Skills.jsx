import { faStar, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import InfoPill from "../components/InfoPill";
import "./Skills.css";

const SKILLS = [
  "React",
  "Redux",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "PostgreSQL",
  "MongoDB",
  "Node.js",
  "Express.js",
  "Next.js",
  "Python",
];

const Skills = () => {
  return (
    <div className="container skills-container" id="skills">
      <h2 className="h2-title margin-top-large" style={{ color: "#7e1bff" }}>
        Top Programming Skills
      </h2>
      <div className="skills-list">
        {SKILLS.map((skill, index) => (
          <InfoPill icon={faStar} content={<span>{skill}</span>} key={index} />
        ))}
      </div>
      <div className="desires-container">
        <h3 className="h3-title">Technologies I would love to learn</h3>
        <InfoPill
          icon={faHeartCirclePlus}
          content={<span>Cloud technologies</span>}
        />
        <InfoPill icon={faHeartCirclePlus} content={<span>E-Commerce</span>} />
        <InfoPill
          icon={faHeartCirclePlus}
          content={<span>Web3 / Etherium</span>}
        />
      </div>
    </div>
  );
};

export default Skills;
