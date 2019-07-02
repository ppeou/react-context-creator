import ReducerCreator from './ReducerCreator';

const {reducer: CountryReducer, actionTypes} = ReducerCreator(
  {
    SET_COUNTRY_DATA: {statePath: 'data'},
    SET_COUNTRY_GRID: {statePath: 'grid'},
    SET_STATE: {
      statePath: 'states',
      actionHandler: (subState, {id, name}) => {
        return Object.assign({}, subState, {[id]: {id, name}})
      }
    },
    REMOVE_STATE_NAME: {
      statePath: 'states',
      actionHandler: (subState, id) => {
        if(subState[id]) {
         const newItem = Object.assign({}, subState);
         delete newItem[id];
         return newItem;
        } else {
          return subState;
        }
      }
    },
    ADD_TODO: {
      statePath: 'todos',
      actionHandler: (subState, name) => {
        return [...subState, name];
      }
    },
    UPDATE_FLEX_NAME: {
      statePath: 'flexObject.name.last',
      actionHandler: (subState, value) => {
        return subState + value;
      }
    },
    HANDLE_TOP_LEVEL: { // if user prefer a single function to handle whole state
      statePath: '',
      actionHandler: (state, value) => {
        console.log(state);
        return state;
      }
    }
  });

export {CountryReducer as default, actionTypes};
