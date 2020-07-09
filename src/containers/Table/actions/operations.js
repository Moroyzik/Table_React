import { addUser, updateUser } from "./tableReducer";

const complexActions = () => async(dispatch, getState) => {
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

export default { complexActions };
