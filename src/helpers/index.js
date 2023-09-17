import convertCurrencyRequest from '../api';

const convertCurrency = async (filteredList, newCurrency, prevCurrency) => {
  if (prevCurrency === newCurrency) {
    return filteredList;
  }
  const requestArr = [];
  const filteredListCopy = [];

  filteredList.forEach((el) => {
    requestArr.push(convertCurrencyRequest(prevCurrency, newCurrency, el.price));
    filteredListCopy.push({ ...el });
  });
  const res = await Promise.all(requestArr);
  filteredListCopy.forEach((el) => {
    el.price = res[filteredListCopy.indexOf(el)].new_amount;
  });
  return filteredListCopy;
};

export default convertCurrency;
