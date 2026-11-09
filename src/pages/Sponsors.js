import React from "react";
import { Button, PageIntro, Photo, SectionHeading } from "../components/UI";
import { SponsorCard } from "../components/Cards";
import { SPONSORS } from "../data/sponsors";
import { site, sponsorMailto } from "../data/site";

export function Sponsors() {
  return (
    <>
      <PageIntro
        number="05"
        eyebrow="Sponsors & supporters"
        title={
          <>
            In our corner. <br />
            Behind every build.
          </>
        }
      >
        Our robots are possible thanks to generous support from sponsors and
        campus partners. Thank you for helping students turn ideas into
        machines.
      </PageIntro>
      <section className="container sponsors-list" aria-label="Our sponsors">
        <div className="sponsor-grid">
          {SPONSORS.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      </section>
      <section className="section sponsor-story">
        <div className="container split-layout">
          <div className="editorial-copy">
            <SectionHeading
              eyebrow="Make an impact"
              title="Support the next generation of builders."
            />
            <p>
              Your contributions help with parts and materials, competition
              travel, student learning, and community outreach.
            </p>
            <p>
              We offer recognition across events, social media, and our website.
              Get in touch to explore how we can collaborate.
            </p>
            <div className="button-row">
              <Button href={sponsorMailto}>Become a Sponsor</Button>
              <Button to="/robots" secondary>
                See Our Robots
              </Button>
            </div>
            <a className="contact-email" href={sponsorMailto}>
              {site.sponsorEmail}
            </a>
          </div>
          <Photo
            className="sponsor-story-photo"
            name="builders"
            alt="DART builders with their combat robots"
          />
        </div>
      </section>
    </>
  );
}
