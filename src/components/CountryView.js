import React, {useContext, useEffect} from 'react';
import {CountryContext} from '../provider/context/CountryContext';

const CountryView = () => {
  const {data, grid, getData, getGrid} = useContext(CountryContext);

  useEffect(() => {
    getData();
    getGrid();
  }, []);

  return (<div>{data} {grid}</div>);
};

export default CountryView;
