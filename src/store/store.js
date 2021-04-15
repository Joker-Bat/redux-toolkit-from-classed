import { configureStore } from "@reduxjs/toolkit";

// Slices
import contactReducer from "./contactSlice";

export default configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
