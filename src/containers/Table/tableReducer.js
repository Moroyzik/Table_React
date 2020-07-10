const initialState =  {data: []};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {...state, ...{data: state.data.concat(action.payload)}};
    case "update":
      return {...state, ...{data: action.payload}};
    default:
      return state;
  }
};



