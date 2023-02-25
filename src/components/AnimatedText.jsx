import { useState } from "react";
import { useTransition, animated } from "react-spring";

const AnimatedText = ({ text }) => {
  const [showText, setShowText] = useState(false);

  const transitions = useTransition(showText, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    loop: true,
    delay: 1000,
  });

  return transitions((style, item) =>
    item ? <animated.p style={style}></animated.p> : null
  );
};
