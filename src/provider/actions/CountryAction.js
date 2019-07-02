import CountryReducer from "../reducers/CountryReducer";

const getData = (dispatch) => {
  return () => {
    dispatch({type: 'SET-COUNTRY-DATA', value: 'my country data'});
  }
};

const getGrid = (dispatch) => {
  return () => {
    dispatch({type: 'SET-COUNTRY-GRID', value: 'my country grid'});
  }
};

const actions = {getData, getGrid};

export default  actions;
