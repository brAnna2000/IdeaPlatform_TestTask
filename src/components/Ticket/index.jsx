import React from 'react';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Moment from 'react-moment';
import turkishAirlinesLogo from '../../assets/img/logo.png';
import smallLogo from '../../assets/img/small_logo.png';

import LazyLoad from 'react-lazyload';
import './index.sass';

const getStopsText = (stops) => {
    let stopsAmount;
    if (stops === 0) {
        stopsAmount = 'БЕЗ ПЕРЕСАДОК'; 
    } else if (stops === 1 || stops % 10 === 1){
        stopsAmount = `${stops} ПЕРЕСАДКА`;
    } else {
        stopsAmount = `${stops} ПЕРЕСАДКИ`;
    }
    return stopsAmount
}
  
export default function Ticket({ data, currency }) {
    return (
        <Card className='ticketCard'>
            <Box>
                <LazyLoad width={200}>
                    <img className='mobileLogo' src={smallLogo}/>
                    <img className='desktopLogo' src={turkishAirlinesLogo}/>
                </LazyLoad>
                <button className='ticketButton'>Купить за {data.price} {currency}</button>
            </Box>
            <Box className="ticketData">
                <div className='ticketInfo'>
                    <p className='ticketTime'>
                        {data.departure_time}
                    </p>
                    <p>{data.origin}, {data.origin_name}</p>
                    <p>
                        <Moment format="d MMM YYYY, ddd">
                            {data.departure_date}    
                        </Moment>
                    </p>
                </div>
                <div className='ticketStops'>
                    {getStopsText(data.stops)}
                </div>
                <div className='ticketInfo'>
                    <p className='ticketTime'>{data.arrival_time}</p>
                    <p>{data.destination}, {data.destination_name}</p>
                    <p>
                        <Moment format="d MMM YYYY, ddd">
                            {data.arrival_date}    
                        </Moment>
                    </p>
                </div>
            </Box>
        </Card>
    );
}