import { useEvents } from '../context/eventsContext';
import { Data } from '../data';

const trimString = (string: string, length: number) => {
  return string.length > length ? string.substring(0, length) + '...' : string;
};

interface EventsDisplayProps {
  showBookingForm: (id: number) => void;
}

const EventsDisplay = ({ showBookingForm }: EventsDisplayProps) => {
  const eventsData = useEvents();
  return (
    <section className='events-container'>
      <h1>Out Upcoming Events</h1>
      {eventsData.map((event: Data) => {
        return (
          <article className='event'>
            <div className='event-date-time'>
              <p>{event.date}</p>
              <h3>{event.time}</h3>
            </div>
            <div className='event-summary'>
              <h2 className='event-title'>{event.title}</h2>
              <p className='event-description'>
                {trimString(event.description, 100)}
              </p>
            </div>
            <div className='event-buttons'>
              <a
                href='#'
                className='btn btn-primary'
                onClick={() => showBookingForm(event.id)}>
                Book Tickets
              </a>
              <a href='#' className='btn btn-secondary'>
                Learn more
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default EventsDisplay;
