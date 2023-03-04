export interface Data {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  maxTickets: number;
  ticketsSold: number;
  ticketsRemaining: number;
}

export const data: Data[] = [
  {
    id: 1,
    name: 'hello',
    date: '8.2.21',
    time: '3:45-6:15pm',
    location: 'Uckfield',
    maxTickets: 10,
    ticketsSold: 0,
    ticketsRemaining: 10,
  },
  {
    id: 2,
    name: 'hi',
    date: '12.2.21',
    time: '3:45-6:15pm',
    location: 'Uckfield',
    maxTickets: 10,
    ticketsSold: 0,
    ticketsRemaining: 10,
  },
  {
    id: 3,
    name: 'heylo',
    date: '17.2.21',
    time: '3:45-6:15pm',
    location: 'Uckfield',
    maxTickets: 10,
    ticketsSold: 0,
    ticketsRemaining: 10,
  },
  {
    id: 4,
    name: 'yo yo',
    date: '15.3.21',
    time: '3:45-6:15pm',
    location: 'Uckfield',
    maxTickets: 10,
    ticketsSold: 0,
    ticketsRemaining: 10,
  },
];
