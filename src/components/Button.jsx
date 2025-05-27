import React, { useRef, useEffect } from "react";
import "./styles/Button.css";
import SplitType from "split-type";
import gsap from "gsap";

const Button = ({ text }) => {
  const container = useRef(null);
  const buttonRef = useRef(null);
  const textRef = useRef(null);

 useEffect(() => {
  if (!buttonRef.current || !textRef.current) return;

  const buttonElement = buttonRef.current; // Store ref value
  const splitWord = new SplitType(textRef.current, { types: "chars" });

  const handleMouseOver = () => {
    gsap.fromTo(
      splitWord.chars,
      { y: -20, opacity: 0, transformOrigin: "top" },
      { y: 0, opacity: 1, stagger: 0.07 }
    );
  };

  const handleMouseOut = () => {
    gsap.to(splitWord.chars, { opacity: 0, y: -15, stagger: 0.01 });
  };

  buttonElement.addEventListener("mouseenter", handleMouseOver);
  buttonElement.addEventListener("mouseleave", handleMouseOut);

  return () => {
    buttonElement.removeEventListener("mouseenter", handleMouseOver);
    buttonElement.removeEventListener("mouseleave", handleMouseOut);
  };
}, [text]); // Re-initialize when text changes


  return (
    <div ref={container}>
      <button className="btn-52" ref={buttonRef}>
        <div className="original">{text}</div>
        <div className="letters" ref={textRef}>
          {text}
        </div>
      </button>
    </div>
  );
};

export default Button;

