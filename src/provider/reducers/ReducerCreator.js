const getPath = (root, path) => {
  let prop = root;
  let parts = path.toString().split('.');
  for (let i = 0; i < parts.length; i++) {
    if (!prop) {
      return;
    }
    let part = parts[i];
    prop = prop[part];
  }
  return prop;
};

const setPath = (root, path, value) => {
  let prop = root;
  let parts = path.toString().split('.');
  let last = parts[parts.length - 1];
  let prevProp;
  if (parts.length > 1) {
    for (let i = 0; i < parts.length - 1; i++) {
      let part = parts[i];
      if (!prop[part]) {
        if (last) {
          prop[part] = {};
        }
      }
      prevProp = prop;
      prop = prop[part];
    }
    prop[last] = value;
    return Object.assign({}, root);
  } else {
    prop = Object.assign({}, prop,{[path]: value});
    return prop;
  }
  return root;
};

const generateUniqueActionID = (id) => {
  return id + '-' + new Date().getTime();
};

const ReducerCreator = (reducerDef) => {
  let actionList = {};
  let actionTypes = {};
  let actionTypeId;

  Object.keys(reducerDef).forEach((actionType) => {
    const {statePath, actionHandler} = reducerDef[actionType];
    actionTypeId = generateUniqueActionID(actionType);
    actionTypes[actionType] = actionTypeId;
    actionList[actionTypeId] = {statePath, actionHandler};
  });

  const reducer = (state, action) => {
    const {type, value} = action;
    const {statePath, actionHandler} = actionList[type] || {};
    let newState = state;
    if (statePath) {
      const subState = getPath(state, statePath);
      const newValue = actionHandler ? actionHandler(subState, value) : value;
      if(newValue !== subState) {
        return setPath(state, statePath, newValue);
      }
    } else if(statePath === '' || statePath === undefined || statePath === null) {
      if(actionHandler) {
        newState = actionHandler(state, value);
      }
    }
    return newState;
  };

  return {reducer, actionTypes};
};

export default ReducerCreator;
