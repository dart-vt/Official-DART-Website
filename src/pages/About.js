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
        DART is a Virginia Tech design team built around combat robotics. We focus on
        iterative design, rapid prototyping, and getting robots competition-ready on a
        6-week build cycle. Each cycle ends with real data we use to improve the next one.
      </p>

      <p className="about-text">
        We compete at various weight classes in robot fighting competitions held each
        Fall and Spring semester. Competitions are how we test our designs, find what
        breaks, and figure out what to do differently next time.
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
