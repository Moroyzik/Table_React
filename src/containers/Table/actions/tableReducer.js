import json from "../../../constants/datas.json";

const initialState =  json;

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "update":
      return action.payload;
    default:
      return state;
  }
};

export const addUser = (userData) => ({
  type: "add",
  payload: userData,
});

export const updateUser = (newData) => ({
  type: "update",
  payload: newData,
});

