import "./Events.css";
import { useTheme } from "../utils/useTheme";

const pub = (p) => `${process.env.PUBLIC_URL}/${p.replace(/^\/+/, '')}`;

const eventsList = [
  {
    name: "DART Spring Combat",
    date: "Saturday, May 02, 2026",
    begin: "8:00 AM",
    end: "5:30 PM",
    location: "Virginia Tech, Goodwin Hall",
    address: "635 Prices Fork Rd, Blacksburg, VA 24061",
    image: "/images/DART.svg",
    link: "https://www.robotcombatevents.com/events/7253",
    registration: { start: "March 29, 2026", end: "April 26, 2026" },
    contact: "nickolasc24@vt.edu",
    fee: "$20 per design",
    schedule: [
      { time: "8:00",  activity: "Doors open" },
      { time: "8:15",  activity: "Safety checks begin" },
      { time: "9:55",  activity: "Safety checks end" },
      { time: "10:00", activity: "Competitor briefing" },
      { time: "10:30", activity: "Fights begin" },
      { time: "12:30", activity: "Lunch break" },
      { time: "5:00",  activity: "Fights end" },
    ],
    safety: [
      "All robots must pass safety checks (failsafe testing and weigh-in) before competing.",
      "If a LiPo becomes exposed, the match ends immediately as a knockout.",
      "Weapon locks must be used at all times outside the arena or test box.",
      "Robots may only be tested in the arena or test box — including drive tests.",
      "Failure to follow safety guidelines may result in removal from the event.",
    ],
    arena: [
      "5 × 5 × 2.5 ft enclosure with 2 layers of ¼ in polycarbonate.",
      "Arena floors and kickplates are made from wood.",
      "No arena hazards.",
    ],
    rules: [
      "Follows SPARC V1.6 rules.",
      "No flame or heat weapons.",
      "Shufflers and non-traditional drive robots receive a 25% weight bonus.",
      "Match length is 2 minutes.",
      "One unstick per match — only to separate robots. A second unstick triggers a judges' decision. Stuck-in-arena robots receive no unstick.",
      "Judges' decisions use a 7-5-5 system: 7 pts weapon effect, 5 pts aggression, 5 pts control.",
      "Minimum 20 minutes repair time between fights. Robots not ready must forfeit; fights pushed back when possible.",
      "Pins held up to 10 seconds. Grapples (moving pins) held up to 20 seconds.",
      "Double elimination format — each robot is guaranteed at least 2 fights.",
    ],
    weightClasses: [
      {
        name: "Full Combat Antweight",
        details: ["16 oz max"],
      },
      {
        name: "Plastic Antweight",
        details: [
          "8 oz max",
          "Allowed materials: PLA, PLA+, PETG, ABS, ASA, PET.",
          "TPU and all flexible materials are prohibited.",
        ],
      },
    ],
  },
];

export function Events() {
  useTheme();

  return (
    <div className="events-page">
      <h1 className="events-title">Events</h1>
      <div className="events-grid">
        {eventsList.map((event, index) => (
          <div key={index} className="event-card-wide">

            {/* Hero */}
            <div className="event-hero">
              <img src={pub(event.image)} alt={event.name} className="event-hero-logo" />
              <div className="event-hero-text">
                <h2 className="event-hero-name">{event.name}</h2>
                <p className="event-hero-date">{event.date}</p>
              </div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="event-register-btn"
              >
                Register →
              </a>
            </div>

            {/* Info chips */}
            <div className="event-info-strip">
              <span className="event-chip">
                <span className="event-chip-label">Time</span>
                {event.begin} – {event.end}
              </span>
              <span className="event-chip">
                <span className="event-chip-label">Location</span>
                {event.location}
              </span>
              <span className="event-chip">
                <span className="event-chip-label">Address</span>
                {event.address}
              </span>
              <span className="event-chip">
                <span className="event-chip-label">Registration</span>
                {event.registration.start} – {event.registration.end}
              </span>
              <span className="event-chip">
                <span className="event-chip-label">Fee</span>
                {event.fee}
              </span>
            </div>

            {/* Sections */}
            <div className="event-body">

              <div className="event-section">
                <h3 className="event-section-title">Schedule</h3>
                <table className="schedule-table">
                  <tbody>
                    {event.schedule.map((row, i) => (
                      <tr key={i}>
                        <td className="schedule-time">{row.time}</td>
                        <td className="schedule-activity">{row.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="event-section">
                <h3 className="event-section-title">Safety</h3>
                <ul className="event-list">
                  {event.safety.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div className="event-section">
                <h3 className="event-section-title">Arena</h3>
                <ul className="event-list">
                  {event.arena.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div className="event-section">
                <h3 className="event-section-title">Rules</h3>
                <ul className="event-list">
                  {event.rules.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>

              <div className="event-section">
                <h3 className="event-section-title">Weight Classes</h3>
                <div className="weight-classes-grid">
                  {event.weightClasses.map((wc, i) => (
                    <div key={i} className="weight-class-card">
                      <h4 className="weight-class-name">{wc.name}</h4>
                      <ul className="event-list">
                        {wc.details.map((d, j) => <li key={j}>{d}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="event-footer">
              Questions? Contact us at{" "}
              <a href={`mailto:${event.contact}`} className="event-contact-link">
                {event.contact}
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
