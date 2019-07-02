const CountryReducer = (state, action) => {
  const {type, value} = action;
  let newState = state;

  if(type === 'SET-COUNTRY-DATA') {
    newState = Object.assign({}, state, {data: value});
  } else if(type === 'SET-COUNTRY-GRID') {
    newState = Object.assign({}, state, {grid: value});
  }

  return newState;
};

export default CountryReducer;
