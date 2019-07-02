import CountryReducer from '../reducers/CountryReducer';
import CountryActions from '../actions/CountryAction';
import ContextCreator from './ContextCreator';

const {Context: CountryContext, Provider: CountryProvider} =
  ContextCreator({
    initialValue: {data: [], grid: undefined, states: {}, todos: []},
    reducers: CountryReducer,
    actions: {...CountryActions}
  });

export {CountryProvider as default, CountryContext};
