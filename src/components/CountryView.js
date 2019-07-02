import React, {useContext, useEffect} from 'react';
import {CountryContext} from '../provider/context/CountryContext';

let [seedData, seedGrid, seedState] = [0,0, 100];
const CountryView = () => {
  const {data, grid, states, getData, getGrid, setState, updateState, fakeUpdate} = useContext(CountryContext);
  const onClickData = (e) => { seedData++; getData(seedData);};
  const onClickGrid = (e) => { seedGrid++; getGrid(seedGrid);};
  const onClickState = (e) => { seedState++; setState(seedState);};
  const onClickUpdateState = (e) => { updateState(101);};
  const onClickFakeUpdate = (e) => { fakeUpdate();};

  useEffect(() => {
    getData(seedData);
    getGrid(seedGrid);
  }, []);

  console.log('here');
  return (<div>
    <div>{data} - {grid}</div>
    <div>{JSON.stringify(states)}</div>
    <button onClick={onClickData}>Increase Data</button>
    <button onClick={onClickGrid}>Increase Grid</button>
    <button onClick={onClickState}>Add State</button>
    <button onClick={onClickUpdateState}>Update State</button>
    <button onClick={onClickFakeUpdate}>Fake Update</button>
  </div>);
};

export default CountryView;
