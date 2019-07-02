import ReducerCreator from './ReducerCreator';

const CountryReducer = ReducerCreator(
  [
    {action: 'SET-COUNTRY-DATA', statePath: 'data'},
    {action: 'SET-COUNTRY-GRID', statePath: 'grid'},
    {action: 'SET-STATES', statePath: 'states',
      reducer: (item, {id, name}) => {
        return Object.assign({}, item, {[id]: {id, name}})
      }
    },
  ]);

export default CountryReducer;
