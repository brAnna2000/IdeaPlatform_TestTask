import ticketsData from '../tickets/tickets.json';

export const currencies = {
  RUB: '₽',
  USD: '$',
  EUR: '€',
};

export const transferValue = {
  without: 0,
  one: 1,
  two: 2,
  three: 3,
};

export const checkboxNames = {
  all: 'Все',
  without: 'Без пересадок',
  one: '1 пересадка',
  two: '2 пересадки',
  three: '3 пересадки',
};

export const currencyName = {
  rub: 'RUB',
  usd: 'USD',
  eur: 'EUR',
};

export const defaultTransferAmount = {
  all: false,
  without: false,
  one: false,
  two: false,
  three: false,
};

export const defaultCurrencyValue = {
  rub: true,
  usd: false,
  eur: false,
};

export const defaultTickets = ticketsData.tickets;
