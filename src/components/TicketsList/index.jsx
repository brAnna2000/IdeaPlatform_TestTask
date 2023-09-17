import React from 'react';

import Ticket from '../Ticket';
import { currencies } from '../../constants';

import './index.sass';
  
export default function TicketsList({ ticketsList, currency }) {
    const tickets = ticketsList.map((el) =>(
        <Ticket key={`${el.origin_name}-${el.destination_name}-${el.departure_time}-${el.stops}-${el.price}`} data={el} currency={currencies[currency]}/>
    ));

    return (
        <div className='ticketsList'>
            {tickets}
        </div>
    );
}