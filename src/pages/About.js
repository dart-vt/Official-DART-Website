// src/components/About.js
import React from "react";
import "./About.css";
import { useTheme } from "../utils/useTheme";
const pub = (p) => `${process.env.PUBLIC_URL}/${p.replace(/^\/+/, '')}`;

export function About() {
  useTheme();

  return (
    <div className="about-page" style={{ padding: "2rem" }}>
      <h1 className="about-title">About DART Robotics</h1>

      <p className="about-text">
        Welcome to DART, Virginia Tech's combat robotics division. We design, build, and
        battle 1lb and 3lb robots that pack a massive punch, taking on rival colleges and
        seasoned pros everywhere from local rumbles to the global stage at NHRL.
      </p>

      <p className="about-text">
        Our engineering philosophy centers on extreme durability and persistence - mastering
        everything from shock-resistant electronics to high-pressure, 20-minute rebuilds
        between fights.
      </p>

      <p className="about-text">
        The team draws from all engineering backgrounds. If you want hands-on experience
        actually building and breaking things, DART is a good fit.
      </p>

      {/* Image back at the bottom */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <img
          src={pub("/images/JanGam.jpg")}
          alt="DART January GAM"
          style={{
            maxWidth: "100%",
            borderRadius: "12px",
            boxShadow: "0 0 12px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}
