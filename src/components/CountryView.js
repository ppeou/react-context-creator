import React, {useContext, useEffect} from 'react';
import {CountryContext} from '../provider/context/CountryContext';

let [seedData, seedGrid, seedState, seedTodo] = [0,0, 100, 10];
let stateId;
const CountryView = () => {

  console.log('CountryView Component Render');
  const {data, grid, states, todos,
    getData, getGrid, setState, updateState, addToDo, removeState,
    fakeUpdate} = useContext(CountryContext);
  const onClickData = (e) => { seedData++; getData(seedData);};
  const onClickGrid = (e) => { seedGrid++; getGrid(seedGrid);};
  const onClickState = (e) => { seedState++; setState(seedState);};
  const onClickUpdateState = (e) => { updateState(101);};
  const onClickAddToDo = (e) => {seedTodo++; addToDo(`To do: ${seedTodo}`);};
  const onClickFakeUpdate = (e) => { fakeUpdate();};
  const onClickRemoveState = (e) => {removeState(stateId);};

  const onChange = (e) => {
    stateId = Number(e.target.value);
  };

  useEffect(() => {
    getData(seedData);
    getGrid(seedGrid);
  }, []);

  return (<div>
    <div>{data} - {grid}</div>
    <div>{JSON.stringify(todos)}</div>
    <div>{JSON.stringify(states)}</div>
    <button onClick={onClickData}>Increase Data</button>
    <button onClick={onClickGrid}>Increase Grid</button>
    <button onClick={onClickState}>Add State</button>
    <button onClick={onClickUpdateState}>Update State</button>
    <button onClick={onClickAddToDo}>Add ToDo</button>
    <button onClick={onClickFakeUpdate}>Fake Update</button>
    <div>
      <input type="text" onChange={onChange} /><button onClick={onClickRemoveState}>Remove State</button>
    </div>
  </div>);
};

export default CountryView;
