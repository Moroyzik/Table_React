export const addUser = (userData) => ({
    type: "add",
    payload: userData,
  });
  
export const updateUser = (newData) => ({
    type: "update",
    payload: newData,
  });
  
export const dataFromServer = () => async(dispatch, getState) => {
    let url = 'http://localhost:3001/posts'
    let resp = await fetch(url);
    if (resp.status === 200) {
      let data = await resp.json();
      dispatch(updateUser(data));
    }
}

