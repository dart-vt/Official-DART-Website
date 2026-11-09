import React from "react";
import { PageIntro, Recruitment } from "../components/UI";
import { RobotCard } from "../components/Cards";
import { robotList } from "../data/robots";

export function Robots() {
  return (
    <>
      <PageIntro
        number="02"
        eyebrow="The robot portfolio"
        title={
          <>
            Meet the <br />
            heavy hitters.
          </>
        }
      >
        Different designs. A shared drive to compete. Explore the combat robots
        built by DART.
      </PageIntro>
      <section className="container portfolio-section" aria-label="Our robots">
        <div className="portfolio-label">
          <span className="eyebrow">The lineup</span>
          <span className="eyebrow">
            {String(robotList.length).padStart(2, "0")} machines / DART Robotics
          </span>
        </div>
        <div className="robot-grid">
          {robotList.map((robot, index) => (
            <RobotCard
              key={robot.name}
              robot={robot}
              index={index}
              headingLevel={2}
            />
          ))}
        </div>
      </section>
      <Recruitment />
    </>
  );
}
