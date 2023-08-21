import { configureStore, combineReducers } from "@reduxjs/toolkit";
import disputeReducer from "redux-dispute-poc";

export const reducers = combineReducers({
    dispute: disputeReducer.reducer,
});

export default configureStore({
    reducer: reducers,
});
