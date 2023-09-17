import axios from 'axios';

const convertCurrencyRequest = async (previousCurrency, newCurrency, value) => {
  try {
    const res = await axios.get(`https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrency}&have=${previousCurrency}&amount=${value}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default convertCurrencyRequest;
