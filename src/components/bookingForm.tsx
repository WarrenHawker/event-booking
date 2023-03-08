import { useState, useEffect } from 'react';
import { useEvents } from '../context/eventsContext';
import { Data } from '../data';
import BookingPageOne from './bookingFormPages/bookingPageOne';
import BookingPageTwo from './bookingFormPages/bookingPageTwo';
import BookingPageThree from './bookingFormPages/bookingPageThree';

interface BookingFormProps {
  eventId: number;
  closeBookingForm: () => void;
}

const BookingForm = ({ eventId, closeBookingForm }: BookingFormProps) => {
  const [activePage, setActivePage] = useState(1);
  const eventsData = useEvents();
  const [event, setEvent] = useState<Data[] | undefined>();

  useEffect(() => {
    setEvent(eventsData.filter((item: Data) => item.id == eventId));
  }, [eventId]);

  return (
    <div className='booking-form-container'>
      <i
        className='fa fa-window-close'
        id='booking-form-close'
        onClick={closeBookingForm}></i>
      {event ? <div className='event-info'>{event[0].title}</div> : null}
      <form id='booking-form'>
        {activePage == 1 ? (
          <BookingPageOne />
        ) : activePage == 2 ? (
          <BookingPageTwo />
        ) : (
          <BookingPageThree />
        )}
      </form>
    </div>
  );
};

export default BookingForm;
