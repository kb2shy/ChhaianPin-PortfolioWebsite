import {
  faEarthAmerica,
  faUserTie,
  faVolumeHigh,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

import InfoPill from "../components/InfoPill";

const About = () => {
  return (
    <div className="container about-container" id="about">
      <h2 className="h2-title">A little bit about me</h2>
      <InfoPill
        icon={faVolumeHigh}
        content={
          <span>
            <strong>Pronunciation:</strong>
            <br />
            [sh-ai-ehn], like Cheyenne
          </span>
        }
      />
      <InfoPill
        icon={faEarthAmerica}
        content={
          <span>
            <strong>Location:</strong>
            <br />
            San Francisco, California, United States
          </span>
        }
      />
      <InfoPill
        icon={faUserGraduate}
        content={
          <span>
            <strong>Education:</strong>
            <br />
            📜 15-Week Full Stack Web Developer Program, Flatiron School
            <br />
            📜 Bachelor of Arts in Criminal Justice, University of Washington
          </span>
        }
      />
      <InfoPill
        icon={faUserTie}
        content={
          <span>
            <strong>Professional summary:</strong>
            <br />
            🟣 Changed careers from public service to software engineering
            <br />
            🟣 Gained 2 years of software engineering experience from T-Mobile
            and Wells Fargo building web applications using React, JavaScript,
            HTML, and CSS <br />
            🟣 Desire to grow as a Full Stack Software Engineer and gain more
            hands-on experience with backend development
          </span>
        }
      />
    </div>
  );
};

export default About;
