import { configureStore, combineReducers } from "@reduxjs/toolkit";
import apiReducer, { middleware as apiMiddleware } from "./api";
import modalReducer from "./modalSlice";
import disputeReducer from "./disputeSlice";

export const reducers = combineReducers({
    // reducers from NPM
    dispute: disputeReducer,
    api: apiReducer,

    // custom reducer
    modal: modalReducer,
});

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        // Add apiMiddleware from NPM
        getDefaultMiddleware().concat(apiMiddleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
