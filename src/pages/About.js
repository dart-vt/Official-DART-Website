import React from "react";
import {
  Affiliation,
  PageIntro,
  Photo,
  Recruitment,
  SectionHeading,
} from "../components/UI";
import { AwardCard } from "../components/Cards";
import { awards } from "../data/site";

const disciplines = [
  [
    "01",
    "Mechanical",
    "From CAD to the arena: design, assemble, and refine the structures that take the hits.",
  ],
  [
    "02",
    "Electrical",
    "Connect power, motors, and controls with durability in mind.",
  ],
  [
    "03",
    "Software",
    "Bring programming and controls thinking to the team’s engineering challenges.",
  ],
  [
    "04",
    "Manufacturing",
    "Turn designs into physical parts, then learn from the way they perform.",
  ],
];
export function About() {
  return (
    <>
      <PageIntro
        number="01"
        eyebrow="About DART"
        title={
          <>
            Engineering with <br />a fighting spirit.
          </>
        }
      >
        We are the Destructive Arena Robotics Team at Virginia Tech. We learn by
        building, compete by adapting, and come back ready for the next fight.
      </PageIntro>
      <div className="container">
        <figure className="team-panorama">
          <Photo
            name="team"
            alt="DART members together at the January general assembly meeting"
            eager
            sizes="90vw"
          />
          <figcaption>DART / January general assembly meeting</figcaption>
        </figure>
      </div>
      <section className="section container split-layout">
        <div>
          <p className="eyebrow">Our mission</p>
          <h2>
            Design for the hit. <br />
            Learn from the impact.
          </h2>
        </div>
        <div className="prose">
          <p>
            Founded in 2022, DART brings together students who want hands-on
            experience actually building and breaking things.
          </p>
          <p>
            We design, build, and battle 1lb and 3lb robots, taking on rival
            colleges and seasoned pros everywhere from local rumbles to the
            global stage at NHRL.
          </p>
          <p>
            Our engineering philosophy centers on extreme durability and
            persistence—from shock-resistant electronics to high-pressure,
            20-minute rebuilds between fights.
          </p>
          <p>
            The team draws from all engineering backgrounds. Students from all
            majors and experience levels are welcome.
          </p>
        </div>
      </section>
      <section className="affiliation-section">
        <div className="container">
          <Affiliation />
          <p className="affiliation-detail">
            Our DART identity and combat robotics focus are part of a broader
            robotics community at Virginia Tech. Find our official team profile
            under CroDart.
          </p>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="How we build"
          title="Different disciplines. One team."
        />
        <div className="discipline-grid">
          {disciplines.map(([number, title, description]) => (
            <article key={title}>
              <span className="eyebrow">{number} /</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="Battle honors"
          title="Proven in the arena."
        >
          Recent tournament placements on record with the Competitive Robotics Organization.
        </SectionHeading>
        <div className="awards-grid">
          {awards.map((award) => (
            <AwardCard key={`${award.event}-${award.year}`} award={award} />
          ))}
        </div>
      </section>
      <section className="founders-section section">
        <div className="container">
          <SectionHeading eyebrow="Our beginnings" title="Meet the founders." />
          <div className="founders-grid">
            <article>
              <Photo name="trevor-ierardi" alt="Trevor Ierardi" />
              <div>
                <h3>Trevor Ierardi</h3>
                <p className="eyebrow">Operations & strategy</p>
                <p>
                  Trevor was the operations lead since DART’s inception, driving
                  logistics and strategy for robot builds and competitions.
                </p>
              </div>
            </article>
            <article>
              <Photo name="nick-cowen" alt="Nick Cowen" />
              <div>
                <h3>Nick Cowen</h3>
                <p className="eyebrow">Leadership & mechanical design</p>
                <p>
                  Nick leads the DART organization and mechanical team with a
                  focus on design innovation and battle-ready durability for our
                  flagship robots.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Recruitment />
    </>
  );
}
