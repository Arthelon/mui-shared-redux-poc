import { configureStore, combineReducers } from "@reduxjs/toolkit";
import disputeSlice from "redux-dispute-poc";
import modalReducer from "./modalSlice";

export const reducers = combineReducers({
    dispute: disputeSlice.reducer,
    modal: modalReducer,
});

const store = configureStore({
    reducer: reducers,
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
