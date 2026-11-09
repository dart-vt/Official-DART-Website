import React from "react";
import { Photo, Arrow } from "./UI";
import { asset } from "../utils/assets";

export function RobotCard({ robot, index, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <article className="robot-card">
      <div className="robot-photo">
        <Photo
          name={robot.photo}
          alt={robot.name}
          sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 30vw"
        />
        <span className="robot-number" aria-hidden="true">
          D / {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="robot-caption">
        <div>
          <p className="eyebrow">{robot.type.replace("Weapon type: ", "")}</p>
          <Heading>{robot.name}</Heading>
        </div>
        <span className="crosshair" aria-hidden="true">
          +
        </span>
      </div>
    </article>
  );
}

export function MemberCard({ member }) {
  const photoName = member.image
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .replaceAll(" ", "-");
  return (
    <article className="member-card">
      <Photo
        name={photoName}
        alt={member.name}
        sizes="(max-width: 640px) 90vw, (max-width: 1000px) 40vw, 23vw"
      />
      <div className="member-info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
        <div className="member-links">
          {member.linkedin && member.linkedin !== "#" && (
            <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`}>
              LinkedIn <Arrow diagonal />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
            >
              Email <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function SponsorCard({ sponsor }) {
  return (
    <a className="sponsor-card" href={sponsor.url}>
      <div className="sponsor-logo-panel">
        <img
          src={asset(sponsor.logo)}
          alt={`${sponsor.name} logo`}
          width="320"
          height="160"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="sponsor-caption">
        <h3>{sponsor.name}</h3>
        <Arrow diagonal />
      </div>
    </a>
  );
}
