import { configureStore} from "@reduxjs/toolkit";
import todoSliceReducer from "./todo";

const store = configureStore({
    reducer: {
      todo: todoSliceReducer
    }
  });
  export  default store