import {actionTypes} from "../reducers/CountryReducer";

const {SET_COUNTRY_DATA, SET_COUNTRY_GRID, SET_STATE, ADD_TODO, REMOVE_STATE_NAME, UPDATE_FLEX_NAME} = actionTypes;

const getData = (dispatch) => {
  return (value) => {
    setTimeout(() => {
      dispatch({type: SET_COUNTRY_DATA, value: 'my country data ' + value});
    }, 5000);
  }
};

const getGrid = (dispatch) => {
  return (value) => {
    dispatch({type: SET_COUNTRY_GRID, value: 'my country grid ' + value});
  }
};

const setState = (dispatch) => {
  return (value) => {
    dispatch({type: SET_STATE, value: {id: value, name: `state ${value}`}});
  };
};

const updateState = (dispatch) => {
  return (value) => {
    dispatch({type: SET_STATE, value: {id: value, name: `updated state : ${new Date()}`}});
  };
};

const removeState = (dispatch) => {
  return (value) => {
    dispatch({type: REMOVE_STATE_NAME, value});
  };
};

const updateFlexName = (dispatch) => {
  return (value) => {
    dispatch({type: UPDATE_FLEX_NAME, value});
  };
};


const addToDo = (dispatch) => {
  return (value) => {
    dispatch({type: ADD_TODO, value});
  };
};

const fakeUpdate = (dispatch) => {
  return () => {
    dispatch({type: 'SET-NOTHING', value: {a: 1, b: 2}});
  };
};

const actions = {getData, getGrid, setState, updateState, addToDo, removeState, updateFlexName, fakeUpdate};

export default  actions;
