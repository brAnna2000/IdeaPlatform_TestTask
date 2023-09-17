import React, { useState, useEffect } from 'react';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Card from '../Card';
import './index.sass';

import { checkboxNames, currencyName, defaultTransferAmount, defaultCurrencyValue } from '../../constants';

function Filter({onFiltersChange}) {
  const [transferAmount, setTransferAmount] = useState(defaultTransferAmount);
  const [currencyValue, setCurrencyValue] = useState(defaultCurrencyValue);

  useEffect(() => {
    const filters = {transferAmount, currencyValue};
    onFiltersChange(filters);
  },[transferAmount, currencyValue]);

  const changeTransferAmount = (e) => {
    const { name, checked } = e.target;
    if(name === 'all'){
      const newTransferAmount = {...transferAmount};
      for (let el in newTransferAmount) {
        newTransferAmount[el] = checked ? true : false;
      }
      setTransferAmount(newTransferAmount);
    }else{
      setTransferAmount({ ...transferAmount, [name]: checked });
    };
  };

  const changeCurrencyValue = (e) => {
    const { name } = e.target;
    const newCurrencyValue = {
      rub: false,
      usd: false,
      eur: false,
    };
    newCurrencyValue[name] = true;
    setCurrencyValue(newCurrencyValue);
  };

  const checkboxGroup = Object.keys(transferAmount).map((el) => (
    <FormControlLabel
      key={el}
      control={
        <Checkbox checked={transferAmount[el]} onChange={(e) => changeTransferAmount(e)} />
      }
      name={el}
      label={checkboxNames[el]}
    />
  ));

  const buttonGroup = Object.keys(currencyValue).map((el) => 
    <Button key={el} name={el} onClick={(e) => changeCurrencyValue(e)}>{currencyName[el]}</Button>
  );

  return (
    <Card className='filter'>
      <div>
        <h1>Валюта</h1>
        <ButtonGroup variant="outlined" aria-label="outlined button group" className='buttonGroup'>
          {buttonGroup}
        </ButtonGroup>  
      </div>
      <div>
        <h1>Количество пересадок</h1>
        <FormGroup>
          {checkboxGroup}
        </FormGroup>  
      </div>
    </Card>
  );
}

export default Filter;
