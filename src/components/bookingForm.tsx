import { useState, ReactNode } from 'react';
import { useEvents } from '../context/eventsContext';
import { Data } from '../data';
import BookingPageOne from './bookingFormPages/bookingPageOne';
import BookingPageTwo from './bookingFormPages/bookingPageTwo';
import BookingPageThree from './bookingFormPages/bookingPageThree';

interface BookingFormProps {
  eventId: number;
}

const BookingForm = ({ eventId }: BookingFormProps) => {
  const [activePage, setActivePage] = useState(1);
  const eventsData = useEvents();
  let event: Data[] = eventsData.filter((item: Data) => item.id == eventId);

  if (!event) {
    return null;
  }

  console.log(event);
  return (
    <div className='booking-form-overlay'>
      <div className='booking-form-container'>
        <i className='fa fa-window-close' id='booking-form-close'></i>
        <div className='event-info'></div>
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
    </div>
  );
};

export default BookingForm;
