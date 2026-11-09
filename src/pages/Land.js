import React from "react";
import { Link } from "react-router-dom";
import {
  Affiliation,
  Arrow,
  Button,
  Photo,
  Recruitment,
  SectionHeading,
} from "../components/UI";
import { RobotCard, SponsorCard } from "../components/Cards";
import { MediaGallery } from "../components/MediaGallery";
import { robotList } from "../data/robots";
import { SPONSORS } from "../data/sponsors";
import { site } from "../data/site";

export function Land() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              Virginia Tech / Combat Robotics
            </p>
            <h1>
              BUILT TO <br />
              TAKE A <span>HIT.</span>
            </h1>
            <p className="hero-description">
              We’re DART. We design, build, and battle combat robots.
              Engineering put to the ultimate test.
            </p>
            <div className="button-row">
              <Button to="/robots">Explore Our Robots</Button>
              <Button href={`mailto:${site.email}`} secondary>
                Join the Team
              </Button>
            </div>
            <a href={site.croDart} className="hero-affiliation">
              <span className="mini-rule" />
              Part of VT CRO · Meet CroDart
              <Arrow diagonal />
            </a>
          </div>
          <figure className="hero-media">
            <Photo
              name="arena"
              alt="Sparks flying as combat robots battle inside an enclosed arena"
              eager
              sizes="(max-width: 1000px) 100vw, 60vw"
            />
            <div className="hero-media-shade" />
            <figcaption>
              <span className="eyebrow">Engineering under pressure</span>
              <span>DESIGN → BUILD → BATTLE</span>
            </figcaption>
            <span className="hero-corner" aria-hidden="true">
              D / 01
            </span>
          </figure>
        </div>
        <div className="hero-bottom container">
          <span>DESTRUCTIVE ARENA ROBOTICS TEAM</span>
          <span>
            BLACKSBURG, VIRGINIA <span className="orange-dot">↘</span>
          </span>
        </div>
      </section>
      <div
        className="discipline-strip"
        aria-label="Our engineering disciplines"
      >
        <div className="container">
          <span>Mechanical</span>
          <span aria-hidden="true">+</span>
          <span>Electrical</span>
          <span aria-hidden="true">+</span>
          <span>Software</span>
          <span aria-hidden="true">+</span>
          <span>Manufacturing</span>
          <span aria-hidden="true">+</span>
          <span>Teamwork</span>
        </div>
      </div>
      <section className="section container">
        <SectionHeading
          eyebrow="01 / The machines"
          title="Small robots. Serious intent."
          to="/robots"
          linkLabel="Meet the full lineup"
        >
          Built by students. Made for the arena. Get to know the machines behind
          DART.
        </SectionHeading>
        <div className="robot-grid">
          {robotList.slice(0, 3).map((robot, index) => (
            <RobotCard key={robot.name} robot={robot} index={index} />
          ))}
        </div>
      </section>
      <section className="about-preview section">
        <div className="container split-layout">
          <div className="editorial-image">
            <Photo
              name="builders"
              alt="DART builders holding their combat robots at an event"
            />
            <span className="image-label">The people behind the machines</span>
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">02 / More than the machine</p>
            <h2>
              Real engineering. <br />
              Real impact.
            </h2>
            <p>
              From the first CAD model to the final repair between fights, every
              robot is an opportunity to learn by doing.
            </p>
            <p>
              We build 1lb and 3lb combat robots, bringing together mechanical,
              electrical, and software engineering with the persistence to keep
              improving.
            </p>
            <Link className="text-link" to="/about">
              Our story
              <Arrow />
            </Link>
            <Affiliation compact />
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="03 / Inside DART"
          title="The work behind the fight."
        >
          A look at the builds, the repairs, and the moments in between.
        </SectionHeading>
        <MediaGallery />
      </section>
      <section className="event-preview">
        <div className="container event-preview-inner">
          <div>
            <p className="eyebrow">From the event archive / May 2026</p>
            <h2>DART Spring Combat</h2>
            <p>Goodwin Hall, Virginia Tech</p>
          </div>
          <Link className="text-link" to="/events">
            Explore our events
            <Arrow />
          </Link>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="04 / In our corner"
          title="Built with your support."
          to="/sponsors"
          linkLabel="Support DART"
        >
          Thank you to the sponsors and campus partners who help make our robots
          possible.
        </SectionHeading>
        <div className="sponsor-grid">
          {SPONSORS.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      </section>
      <Recruitment />
    </>
  );
}
