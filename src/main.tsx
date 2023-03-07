import ReactDOM from 'react-dom/client';
import App from './app';
import './styles/globals.css';
import { EventsContextProvider } from './context/eventsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <EventsContextProvider>
    <App />
  </EventsContextProvider>
);
