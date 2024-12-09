

import { createStore } from "redux";
import userSlice from "./reducers/user";
// import { useDispatch } from "react-redux";

const store = createStore(userSlice);
// export const dispatch=useDispatch()

export default store;



