import React, { useEffect, useRef } from "react";

import "./Robots.css";
import { Link } from "react-router-dom";
const pub = (p) => `${process.env.PUBLIC_URL}/${p.replace(/^\/+/, '')}`;

const robotList = [
  {
    name: "Storm Surge",
    type: "Spinner Bot",
    image: "/images/stormsurge.png",
    description: "High-speed spinner designed for aggressive takedowns combat.",
    link: "/robots/storm-surge"
  },
  {
    name: "Pinhead Larry",
    type: "Flipper Bot",
    image: "/images/pinhead.png",
    description: "Robust flipper robot engineered for precision control and endurance battles.",
    link: "/robots/pinhead-larry"
  },
  {
    name: "Eggbeater",
    type: "Vertical Spinner",
    image: "/images/eggbeater.png",
    description: "Compact yet powerful vertical spinner ideal for maneuverability and knockout hits.",
    link: "/robots/eggbeater"
  },
  {
  name: "Be Careful",
  type: "Saw",
  image: "/images/Becareful.png",
  description: "Overhead saw bot with a vertical cutting blade built for precise top-down attacks.",
},
{
  name: "Refuse",
  type: "Launcher",
  image: "/images/Refuse.png",
  description: "Low-profile circular launcher designed for quick flips and agile movement.",
},
{
  name: "Goaline",
  type: "Spinner",
  image: "/images/Goaline.png",
  description: "Triangular wedge spinner built for strong frontal impacts and durability.",
},
{
  name: "Pickle Jar",
  type: "Tornado",
  image: "/images/Picklejar.png",
  description: "Compact drum-style spinner with a heavy rotating shell for wide strikes.",
},
{
  name: "CyclicalSubversion",
  type: "Excavator",
  image: "/images/CyclicalSubversion.png",
  description: "Ramp designed for controlled lifting, pushing, and disruption.",
}
];

export function Robots() {
  const listRef = useRef(null);

  return (
    <div className="robots-page">
      <h1 className="robots-title">Our Robots</h1>
      <div className="robots-grid" ref={listRef}>
        {robotList.map((robot, index) => (
          <div className="robot-card" key={index}>
            <img src={pub(robot.image)} alt={robot.name} className="robot-image" />
            <div className="robot-info">
              <h3>{robot.name}</h3>
              <p><em>{robot.type}</em></p>
              <p>{robot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}