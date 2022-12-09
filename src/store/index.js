import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/slice";
import servicerReducer from "./servicer/slice";

export default configureStore({
  reducer: {
    user: userReducer,
    servicer: servicerReducer,
  },
});
