export interface Data {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxTickets: number;
  ticketsSold: number;
  ticketsRemaining: number;
}

export const eventsData: Data[] = [
  {
    id: 1,
    title: 'hello',
    description: 'this is an event',
    date: '24 Sep - 25 Sep',
    time: '3:45-6:15pm',
    location: 'Uckfield',
    maxTickets: 10,
    ticketsSold: 0,
    ticketsRemaining: 10,
  },
  {
    id: 2,
    title: 'hi',
    description: 'this is an event',
    date: '22 Dec',
    time: '3:45-6:15pm',
    location: 'Uckfield',
    maxTickets: 10,
    ticketsSold: 0,
    ticketsRemaining: 10,
  },
  {
    id: 3,
    title: 'heylo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '05 Mar',
    time: '3:45-6:15pm',
    location: 'Uckfield',
    maxTickets: 10,
    ticketsSold: 0,
    ticketsRemaining: 10,
  },
  {
    id: 4,
    title: 'yo yo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '25 Sep',
    time: '3:45-6:15pm',
    location: 'Uckfield',
    maxTickets: 10,
    ticketsSold: 0,
    ticketsRemaining: 10,
  },
];
