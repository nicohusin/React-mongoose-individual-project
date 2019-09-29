const defaultState = {
  userData: {}
}

const getUserName = (state = defaultState, action) => {
  switch (action.type) {
    
    case "GET_USER":
      return {...state, userData: action.payload};

    default:
      return state;
  }
};

export default getUserName;