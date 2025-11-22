import React, { useState } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import Typewriter from "../../components/typewriter/Typewriter";

export default function Greeting(props) {
  const theme = props.theme;
  const [showSlogan, setShowSlogan] = useState(false);

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                <Typewriter 
                  text={greeting.title} 
                  speed={100}
                  onComplete={() => setShowSlogan(true)}
                />
              </h1>
              {showSlogan && greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  <Typewriter 
                    text={greeting.nickname} 
                    speed={50}
                  />
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.githubProfile}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              <div className="contact-buttons-div" style={{ marginTop: "20px", display: "flex", gap: "15px", flexWrap: "wrap" }}>
                <Button
                  text="📄 View CV"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                  className="contact-btn"
                />
                <Button
                  text="💼 LinkedIn"
                  newTab={true}
                  href="https://www.linkedin.com/in/ahmed-sayed-mansour-976bb0249/"
                  theme={theme}
                  className="contact-btn"
                />
                <Button
                  text="🐙 GitHub"
                  newTab={true}
                  href={greeting.githubProfile}
                  theme={theme}
                  className="contact-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assets/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
