import React, { createContext, useState, useEffect } from 'react';
import {api} from '../util/api.js';

export const ConversionContext = createContext();
const DEFAULT_BASE_CURRENCY = 'USD';
const DEFAULT_QUOTE_CURRENCY = 'GBP';

export const ConversionContextProvider = ({ children }) => {
    const [BaseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
    const [QuoteCurrency, setQuoteCurrency] = useState( DEFAULT_QUOTE_CURRENCY);
    const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const setBaseCurrency = (currency) => {
    return api(`/latest?base=${currency}`)
    .then((res) => {
      _setBaseCurrency(currency);
      setDate(res.date);
      setRates(res.rates);
    })
    .catch((error) => {
      Alert.alert('Sorry, something went wrong.', error.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };
  
    const swapCurrencies = () => {
      setBaseCurrency(QuoteCurrency);
      setQuoteCurrency(BaseCurrency);
    };

    useEffect(() => {
      setBaseCurrency(DEFAULT_BASE_CURRENCY);
    }, []);
  
    const contextValue = {
      BaseCurrency,
      QuoteCurrency,
      setBaseCurrency,
      setQuoteCurrency,
      swapCurrencies,
      date,
      rates,
      isLoading,
    };
  
    return (
      <ConversionContext.Provider value={contextValue}>
        {children}
      </ConversionContext.Provider>
    );
  };