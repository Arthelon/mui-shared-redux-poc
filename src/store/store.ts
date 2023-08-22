import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import apiReducer, { middleware as apiMiddleware } from "./api";
import disputeReducer from "./disputeSlice";

export const reducers = combineReducers({
    dispute: disputeReducer,
    api: apiReducer,
    modal: modalReducer,
});

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMiddleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
