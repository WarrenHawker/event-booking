import Header from './components/header';
import EventsDisplay from './components/eventsDisplay';
import { useState } from 'react';
import BookingForm from './components/bookingForm';

const App = () => {
  const [bookingFormEvent, setBookingFormEvent] = useState(0);

  const showBookingForm = (id: number) => {
    setBookingFormEvent(id);
  };

  const closeBookingForm = () => {
    setBookingFormEvent(0);
  };
  return (
    <>
      <Header />
      <main>
        <EventsDisplay showBookingForm={showBookingForm} />
      </main>
      {bookingFormEvent == 0 ? null : (
        <BookingForm eventId={bookingFormEvent} />
      )}
    </>
  );
};

export default App;
