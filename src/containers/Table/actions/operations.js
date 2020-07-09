import { addUser, updateUser } from "./tableReducer";

const complexActions = (distance) => (dispatchEvent) => {
    dispatchEvent(addUser().then(() => {
        dispatchEvent(updateUser(distance));
    }));
}

export default { complexActions };
