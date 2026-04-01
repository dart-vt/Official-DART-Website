import "./Events.css";
import { useTheme } from "../utils/useTheme";

const pub = (p) => `${process.env.PUBLIC_URL}/${p.replace(/^\/+/, '')}`;

/**
 * The events lists,
 * displays events in a card structure
 */
const eventsList = [
  {
    name: "DART Spring Combat",
    date: "Saturday, May 2nd",
    location: "Virginia Tech, Goodwin Hall",
    address: "635 Prices Fork Rd, Blacksburg, VA 24060",
    details: "Full combat antweight & plastic antweight tournament. Double elimination format, 2-min matches. Registration fee: $20 per design.",
    image: "/images/DART.svg",
    link: "https://www.robotcombatevents.com/events/7253",
  },

  
];

export function Events() {
  useTheme();

  return (
    <div className="events-page">
      <h1 className="events-title">Events</h1>
      <div className="events-grid">
        {eventsList.map((event, index) => (
          <a
            key={index}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="event-card-link"
          >
            <div className="event-card">
              <img src={pub(event.image)} alt={event.name} className="event-image" />
              <div className="event-card-header">
                <h3 className="event-name">{event.name}</h3>
                <span className="event-date">{event.date}</span>
              </div>
              <div className="event-card-body">
                <p className="event-location">
                  <span className="event-label">Location:</span> {event.location}
                </p>
                <p className="event-address">
                  <span className="event-label">Address:</span> {event.address}
                </p>
                <p className="event-details">{event.details}</p>
              </div>
              <div className="event-card-footer">
                <span className="event-cta">View Event Details →</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
