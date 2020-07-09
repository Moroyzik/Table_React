export const addUser = (userData) => ({
    type: "add",
    payload: userData,
  });
  
export const updateUser = (newData) => ({
    type: "update",
    payload: newData,
  });
  
export const complexActions = () => async(dispatch, getState) => {
    console.log("work");
    console.log(dispatch);
    console.log(getState());
    let url = 'http://localhost:3001/posts'
    let resp = await fetch(url);
    console.log(resp.status);
    if (resp.status === 200) {
      let data = await resp.json();
      console.log(data);
      dispatch(updateUser(data));
    }
}

