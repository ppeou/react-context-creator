import CountryReducer from "../reducers/CountryReducer";

const getData = (dispatch) => {
  return (value) => {
    dispatch({type: 'SET-COUNTRY-DATA', value: 'my country data ' + value});
  }
};

const getGrid = (dispatch) => {
  return (value) => {
    dispatch({type: 'SET-COUNTRY-GRID', value: 'my country grid ' + value});
  }
};

const setState = (dispatch) => {
  return (value) => {
    dispatch({type: 'SET-STATES', value: {id: value, name: `state : ${value}`}});
  };
};

const updateState = (dispatch) => {
  return (value) => {
    dispatch({type: 'SET-STATES', value: {id: value, name: `updated state : ${new Date()}`}});
  };
};

const fakeUpdate = (dispatch) => {
  return () => {
    dispatch({type: 'SET-NOTHING', value: {a: 1, b: 2}});
  };
};

const actions = {getData, getGrid, setState, updateState, fakeUpdate};

export default  actions;
