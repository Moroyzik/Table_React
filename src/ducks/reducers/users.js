import json from "../../constants/datas.json";

const initialState = json;

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return action.payload;
    case "edit":
      return action.payload;
    default:
      return state;
  }
};

export const addUser = (userData) => ({
  type: "add",
  payload: userData,
});

export const deleteUser = (newData) => ({
  type: "delete",
  payload: newData,
});

export const editUser = (newData) => ({
  type: "edit",
  payload: newData,
});
