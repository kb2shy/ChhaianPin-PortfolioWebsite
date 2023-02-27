import React, { useState, useMemo } from "react";
import { useTrail, useTransition, animated } from "@react-spring/web";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

import ButtonWithIcon from "../components/ButtonWithIcon";

const navList = [
  { section: "About me", href: "about" },
  { section: "Career Objectives", href: "objectives" },
  { section: "Tech Skills", href: "skills" },
  { section: "Experience", href: "experience" },
  { section: "Contact me", href: "contact" },
];

const Header = () => {
  const [showList, setShowList] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = useMemo(
    () => [
      "Full Stack Web Developer",
      "React and JavaScript Developer",
      "Software Engineer",
    ],
    []
  );

  const rolesTransition = useTransition(currentIndex, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onRest: (_springs, _ctrl, item) => {
      if (currentIndex === item) {
        setTimeout(() => {
          setCurrentIndex(
            currentIndex === roles.length - 1 ? 0 : currentIndex + 1
          );
        }, 5000);
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 4000,
    },
    delay: 500,
  });

  const navListTrail = useTrail(navList.length, {
    from: { opacity: 0, transform: "translateY(-24px)" },
    to: {
      opacity: showList ? 1 : 0,
      transform: showList ? "translateY(0)" : "translateY(-24px)",
    },
    reverse: !showList,
  });

  const displayMenu = () => {
    setShowList((showList) => !showList);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setShowList(false);
  };

  return (
    <div className="container header-container">
      <h1 className="header-title">
        <span>Hi!</span>
        <span>I'm Chhaian Pin.</span>
      </h1>
      {rolesTransition((style, item) => (
        <animated.p className="header-roles" style={style}>
          {roles[item]}
        </animated.p>
      ))}
      <img
        className="header-img"
        src="./images/chhaian-profile.jpg"
        alt="Chhaian's headshot profile"
      />
      <ButtonWithIcon
        text="My Journey"
        icon={faChevronDown}
        handleOnClick={displayMenu}
        animate={showList ? "header-btn rotate-up" : "header-btn rotate-down"}
      />
      <div className={`header-list-container ${showList ? "show" : "hide"}`}>
        <ul className={`header-list-items`}>
          {navListTrail.map((props, index) => (
            <animated.li
              key={index}
              style={props}
              className="header-list-item"
              onClick={() => scrollToSection(navList[index].href)}
            >
              {navList[index].section}
            </animated.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
