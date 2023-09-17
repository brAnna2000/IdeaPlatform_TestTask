import React, { useEffect, useState } from 'react';
import Filter from './components/Filter';
import TicketsList from './components/TicketsList';

import convertCurrency from './helpers';
import { transferValue, defaultTickets } from './constants';
import './App.sass';

function App() {
  const [ticketsList, setTicketsList] = useState(defaultTickets);
  const [filters, setFilters] = useState({});
  const [prevCurrency, setPrevCurrency] = useState('RUB');

  const updateStates = (ticketsData, currencyValue) => {
    setTicketsList(ticketsData);
    setPrevCurrency(currencyValue);
  }

  const asyncUpdateData = async (tickets, currencyValue, prevCurrency) => {
    const updatedTicketsData = await convertCurrency(tickets, currencyValue, prevCurrency);
    updateStates(updatedTicketsData, currencyValue);
  }

  useEffect(() => {
    if (!!Object.keys(filters).length) {
      const transferFilter = [];
      let currencyValue;
      for (let i in filters.currencyValue) {
        if (filters.currencyValue[i]) {
          currencyValue = i.toUpperCase();
        }
      }
      for (let el in filters.transferAmount) {
        filters.transferAmount[el] && transferFilter.push(el);
      }
      if (filters.currencyValue.rub && (filters.transferAmount.all || !transferFilter.length)) {
        updateStates(defaultTickets, currencyValue);
        return
      }
      if (filters.transferAmount.all || !transferFilter.length) {
        asyncUpdateData(defaultTickets, currencyValue, prevCurrency);
        return
      } else {
        let newTicketsList = [];
        newTicketsList = transferFilter.map((el) => {
          return defaultTickets.filter(function (ticket) {
            return ticket.stops === transferValue[el];
          });
        });
        asyncUpdateData(newTicketsList.flat(), currencyValue, prevCurrency);
      }
    }
  },[filters]);

  const filtersChange = (filters) => setFilters(filters);

  return (
    <div className='app'>
      <Filter onFiltersChange={filtersChange}/>
      <TicketsList ticketsList={ticketsList} currency={prevCurrency}/>
    </div>
  );
}

export default App;
