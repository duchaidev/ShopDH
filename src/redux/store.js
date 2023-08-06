import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import dropdownSlide from "./dropdownSlide";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["register"],
};

const rootReducer = combineReducers({
  register: authSlice,
  dropdown: dropdownSlide,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";
// import dropdownSlideSlice from "./dropdownSlide";

// export const store = configureStore({
//   reducer: {
//     register: authSlice,
//     dropdownSlide: dropdownSlideSlice,
//   },
// });
