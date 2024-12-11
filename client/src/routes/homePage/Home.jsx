import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
function Home() {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="home">
      <img src="/background.svg" alt="" className="orbital" />
      <div className="left">
        <h1>ALAA AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          iusto vitae, quam ad quisquam commodi ab. At voluptas quam autem,
          inventore officiis doloribus libero quos esse cum. Blanditiis, impedit
          nam?
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="./bot.svg" className="bot" alt="" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/male.svg"
                  : typingStatus === "human2"
                  ? "/female.svg"
                  : "bot.svg"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/ai.svg" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
