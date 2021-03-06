const getPath = (root, path) => {
  let prop = root;
  let parts = path.toString().split('.');
  for (let i=0; i<parts.length; i++) {
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
    prop[path] = value;
  }
  return parts.join('.');
};

const ReducerCreator = (state, arr) => {
  let actionList = {};
  arr.forEach(({action, statePath, reducer}) => {
    if(!actionList[action]) {
      actionList[action] = {action, statePath, reducer};
    } else {
      throw Error(`Action Type: "${action}" is already used.`);
    }
  });

  return (state, action) => {
    const {type, value} = action;
    const {statePath, reducer} = actionList[type] || {};
    if(reducer) {
      return reducer(getPath(statePath), value);
    }
    return state;
  };
};


export default ReducerCreator;
