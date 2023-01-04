import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./slices/dogsSlice";

const store = configureStore({
    reducer: {
        dogs: dogReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
