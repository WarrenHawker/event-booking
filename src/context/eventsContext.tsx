import { createContext, ReactNode, useContext } from 'react';
import { eventsData } from '../data';

interface ContextProviderProps {
  children?: ReactNode;
}

const EventsContext = createContext({});
export const useEvents = () => useContext(EventsContext);

export const EventsContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <EventsContext.Provider value={eventsData}>
      {children}
    </EventsContext.Provider>
  );
};
