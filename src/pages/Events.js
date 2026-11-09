import React from "react";
import { PageIntro, Button } from "../components/UI";
import { eventsList } from "../data/events";

export function Events() {
  return (
    <>
      <PageIntro
        number="04"
        eyebrow="In and around the arena"
        title={
          <>
            Built to compete. <br />
            Ready to connect.
          </>
        }
      >
        Competition brings the work to life. Explore our events and the details
        that make a day in the arena possible.
      </PageIntro>
      <div className="container events-list">
        {eventsList.map((event) => {
          const past = new Date(event.endsAt).getTime() < Date.now();
          const date = new Date(event.dateISO + "T12:00:00Z");
          return (
            <article className="event-card" key={event.name}>
              <header className="event-header">
                <div className="event-date-block" aria-hidden="true">
                  <span>
                    {date.toLocaleDateString("en-US", {
                      month: "short",
                      timeZone: "UTC",
                    })}
                  </span>
                  <strong>{String(date.getUTCDate()).padStart(2, "0")}</strong>
                  <span>{date.getUTCFullYear()}</span>
                </div>
                <div className="event-heading">
                  <p className="eyebrow">
                    {past ? "Past event / Archive" : "Upcoming event"}
                  </p>
                  <h2>{event.name}</h2>
                  <p>
                    <time dateTime={event.dateISO}>{event.date}</time>
                  </p>
                </div>
                <Button href={event.link} secondary>
                  {past ? "View event details" : "View registration"}
                </Button>
              </header>
              <dl className="event-facts">
                <div>
                  <dt>Time</dt>
                  <dd>
                    {event.begin} – {event.end}
                  </dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>
                    {event.location}
                    <span>{event.address}</span>
                  </dd>
                </div>
                <div>
                  <dt>Registration window</dt>
                  <dd>
                    {event.registration.start} – {event.registration.end}
                  </dd>
                </div>
                <div>
                  <dt>Entry fee</dt>
                  <dd>{event.fee}</dd>
                </div>
              </dl>
              {past && (
                <p className="archive-note">
                  This event has concluded. The schedule and competition
                  requirements below are preserved for reference.
                </p>
              )}
              <div className="event-content">
                <section className="event-schedule">
                  <h3>Schedule</h3>
                  <table>
                    <caption className="sr-only">{event.name} schedule</caption>
                    <thead>
                      <tr>
                        <th scope="col">Time</th>
                        <th scope="col">Activity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {event.schedule.map((row) => (
                        <tr key={row.activity}>
                          <td>{row.time}</td>
                          <td>{row.activity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
                <div className="event-requirements">
                  {[
                    ["Weight classes", null],
                    ["Safety", event.safety],
                    ["Arena", event.arena],
                    ["Rules", event.rules],
                  ].map(([title, items]) => (
                    <details
                      key={title}
                      open={title === "Weight classes" || title === "Safety"}
                    >
                      <summary>
                        <h3>{title}</h3>
                        <span aria-hidden="true">+</span>
                      </summary>
                      {items ? (
                        <ul>
                          {items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <div className="weight-classes">
                          {event.weightClasses.map((wc) => (
                            <div key={wc.name}>
                              <h4>{wc.name}</h4>
                              <ul>
                                {wc.details.map((detail) => (
                                  <li key={detail}>{detail}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </details>
                  ))}
                </div>
              </div>
              <footer className="event-contact">
                Questions about DART events?{" "}
                <a href={`mailto:${event.contact}`}>{event.contact}</a>
              </footer>
            </article>
          );
        })}
      </div>
    </>
  );
}
