import React, {useReducer} from 'react';

const ContextCreator = ({initialValue, reducers, actions}) => {

  const Context  = React.createContext();

  const Provider = (props) => {
    const [state, dispatch] = useReducer(reducers, initialValue);
    const _actions = Object.keys(actions).reduce((p, k) => {
      p[k] = actions[k](dispatch);
      return p;
    }, {});

    const value = {...state, ..._actions};

    return (<Context.Provider value={value} {...props} />);
  };

  return {Context, Provider};
};

export default ContextCreator;
