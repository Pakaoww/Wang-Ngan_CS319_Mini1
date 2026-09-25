import { events } from "../data";

type EventsProps = { onRegister: (name: string) => void };

export default function Events({ onRegister }: EventsProps) {
  return (
    <section className="container page">
      <div className="page-heading">
        <p className="eyebrow">EVENTS & SEMINARS</p>
        <h1>Meet and learn together</h1>
        <p>Join seminars, workshops, and career events from anywhere.</p>
      </div>
      <div className="event-list">
        {events.map((event) => (
          <article className="event-item" key={event.name}>
            <div className="date-box">
              {event.date.split(" ")[0]}
              <small>{event.date.split(" ")[1]}</small>
            </div>
            <div>
              <h2>{event.name}</h2>
              <p>
                {event.date} · {event.time}
              </p>
              <p>
                {event.location} · Speaker: {event.speaker}
              </p>
            </div>
            <button
              className="button small"
              onClick={() => onRegister(event.name)}
            >
              Register
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
