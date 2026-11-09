import React from "react";
import { PageIntro, Photo, Recruitment } from "../components/UI";
import { MemberCard } from "../components/Cards";
import { alumni, teamGroups } from "../data/team";

export function Team() {
  return (
    <>
      <PageIntro
        number="03"
        eyebrow="The people behind DART"
        title={
          <>
            Great robots. <br />
            Even better teammates.
          </>
        }
      >
        Engineering is a team effort. Meet the people bringing our machines—and
        our community—to life.
      </PageIntro>
      <div className="container">
        <figure className="team-panorama">
          <Photo
            name="team-mono"
            alt="The DART team at a general assembly meeting"
            eager
            sizes="90vw"
          />
          <figcaption>Built together / DART Robotics</figcaption>
        </figure>
      </div>
      <div className="container team-sections">
        {teamGroups.map((group, index) => (
          <section className="team-section" key={group.title}>
            <div className="team-section-title">
              <p className="eyebrow">
                {String(index + 1).padStart(2, "0")} / Our people
              </p>
              <h2>{group.title}</h2>
            </div>
            <div
              className={`member-grid${group.members.length === 1 ? " member-grid-single" : ""}`}
            >
              {group.members.map((member) => (
                <MemberCard key={member.name} member={member} />
              ))}
            </div>
          </section>
        ))}
        <section className="team-section">
          <div className="team-section-title">
            <p className="eyebrow">
              {String(teamGroups.length + 1).padStart(2, "0")} / Always part of
              DART
            </p>
            <h2>Alumni</h2>
          </div>
          {alumni.map(({ year, columns }) => (
            <div className="alumni-row" key={year}>
              <h3>{year}</h3>
              <ul>
                {columns.flat().map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
      <Recruitment />
    </>
  );
}
