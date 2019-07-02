import ReducerCreator from './ReducerCreator';

const {reducer: CountryReducer, actionTypes} = ReducerCreator(
  {
    SET_COUNTRY_DATA: {statePath: 'data'},
    SET_COUNTRY_GRID: {statePath: 'grid'},
    SET_STATE: {
      statePath: 'states',
      actionHandler: (item, {id, name}) => {
        return Object.assign({}, item, {[id]: {id, name}})
      }
    },
    REMOVE_STATE_NAME: {
      statePath: 'states',
      actionHandler: (item, id) => {
        if(item[id]) {
         const newItem = Object.assign({}, item);
         delete newItem[id];
         return newItem;
        } else {
          return item;
        }
      }
    },
    ADD_TODO: {
      statePath: 'todos',
      actionHandler: (item, name) => {
        return [...item, name];
      }
    },
  });

export {CountryReducer as default, actionTypes};
