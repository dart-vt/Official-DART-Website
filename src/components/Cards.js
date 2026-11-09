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
        {robot.weightClass && (
          <span className="robot-class-badge" aria-hidden="true">
            {robot.weightClass.toUpperCase()}
          </span>
        )}
      </div>
      <div className="robot-caption">
        <div>
          <div className="robot-meta-row">
            <p className="eyebrow">{robot.type.replace("Weapon type: ", "")}</p>
          </div>
          <Heading>{robot.name}</Heading>
        </div>
        <span className="crosshair" aria-hidden="true">
          +
        </span>
      </div>
    </article>
  );
}

export function AwardCard({ award }) {
  return (
    <div className="award-card">
      <div className="award-trophy" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 9H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3m12 6h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3M6 3h12v7a6 6 0 0 1-12 0V3Zm4 15v3m4-3v3m-7 0h10" />
        </svg>
      </div>
      <div className="award-details">
        <div className="award-header">
          <strong className="award-place">{award.place}</strong>
          <span className="award-year">{award.year}</span>
        </div>
        <p className="award-division">{award.division}</p>
        <p className="award-event">{award.event}</p>
      </div>
    </div>
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
