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
  if (parts.length > 1) {
    for (let i = 0; i < parts.length - 1; i++) {
      let part = parts[i];
      if (!prop[part]) {
        if (last) {
          prop[part] = {};
        }
      }
      prop = prop[part];
    }
    prop[last] = value;
  } else {
    prop = Object.assign({}, prop,{[path]: value});
  }

  return prop;
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
      const src = getPath(state, statePath);
      const newValue = actionHandler ? actionHandler(src, value) : value;
      if(newValue !== src) {
        newState = Object.assign({}, setPath(state, statePath, newValue));
      }
    }
    return newState;
  };

  return {reducer, actionTypes};
};

export default ReducerCreator;
