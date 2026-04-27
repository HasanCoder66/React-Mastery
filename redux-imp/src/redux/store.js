import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./persist";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer : persistedReducer(rootReducer) ,
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)


export default store