import { useState, useEffect } from "react";
import InfoPill from "../components/InfoPill";
import { useTransition, animated, useSpringRef } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCarSide,
  faCloud,
  faMoneyBillTransfer,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Objectives.css";

const OBJECTIVES = [
  {
    icon: faCarSide,
    title: "Autonomous Vehicles",
    info: `In October of 2019, I participated in a hackathon where my team
    took first place pitching the idea of a camera assisted
    navigation system. The goals were to reduce the number accidents
    on the road as well as provide feedback to driver behaviors. The
    project was prototyped with a Raspberry Pi camera system, React
    Native for mobile development, Java Spring Boot for backend
    services, and RStudio/ML Model for machine learning. I led a
    team of 5 other engineers, managed the project, and developed
    the React Native application. This experience ignited my
    interest in self-driving cars and developing in-car applications
    using React and React Native.`,
  },
  {
    icon: faCloud,
    title: "Cloud Engineering",
    info: `While working at T-Mobile, I had a brief moment where I deployed a budget analytics tool to the Azure Cloud and found the technology exciting to work with. I continued to learn AWS on my own, however, I didn't have the opportunity (or resources) to apply it to my own projects. If given the opportunity, I would definitely like to develop web applications and deploy them to the cloud.`,
  },
  {
    icon: faMoneyBillTransfer,
    title: "FinTech",
    info: `Wells Fargo provided some great insight into the banking industry and I wanted to learn more about FinTech in general. I don't have a strong foundation in finances nor cryptocurrency, however, my interests are piqued by the challenges that that industry faces. I'm interested in tackling some of those challenges and making FinTech accessible to as many people as possible.`,
  },
];

const Objectives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [next, setNext] = useState(false);

  const updateObjective = (num) => {
    if (num === -1) {
      setNext(false);
    } else {
      setNext(true);
    }

    const newIndex = currentIndex + num;
    if (newIndex >= OBJECTIVES.length) {
      setCurrentIndex(0);
    } else if (newIndex < 0) {
      setCurrentIndex(OBJECTIVES.length - 1);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const transRef = useSpringRef();
  const transitions = useTransition(currentIndex, {
    from: {
      opacity: 0,
      transform: next ? "translateX(50%)" : "translateX(-50%)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: {
      opacity: 0,
      transform: next ? "translateX(-50%)" : "translateX(50%)",
    },
    exitBeforeEnter: true,
    trail: 1,
  });

  useEffect(() => {
    transRef.start();
  }, [currentIndex, transRef]);

  return (
    <div className="container objectives-container" id="objectives">
      <h2 className="h2-title purple">career objectives</h2>
      {transitions((style, index) => (
        <animated.div key={index} style={style} className="animation-container">
          <InfoPill
            icon={OBJECTIVES[currentIndex].icon}
            content={
              <div>
                <strong>{OBJECTIVES[currentIndex].title}</strong>
                <br />
                <p>{OBJECTIVES[currentIndex].info}</p>
              </div>
            }
          />
        </animated.div>
      ))}
      <div className="objectives-btns">
        <button
          className="objective-btn"
          onClick={(e) => {
            e.preventDefault();
            updateObjective(-1);
          }}
        >
          <span className="pad-right-8">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <span>Previous</span>
        </button>
        <button
          className="objective-btn"
          onClick={(e) => {
            e.preventDefault();
            updateObjective(1);
          }}
        >
          <span className="pad-right-8">Next</span>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Objectives;
