import { PayloadAction, createAction } from "@reduxjs/toolkit";
import { Dispute, configureDisputeSlice } from "redux-dispute-poc";

// Custom action
export const addDispute = createAction<Dispute>("addDispute");

const disputeSlice = configureDisputeSlice({
    extraActions: (builder) => {
        // Add custom action to NPM reducer
        builder.addCase(addDispute, (state, action: PayloadAction<Dispute>) => {
            state.disputes.push(action.payload);
        });
    },
    actionOverrides: {},
    initialState: {
        disputes: [],
    },
});

// Export reducer actions
export const { setDisputes, concedeDispute, challengeDispute } =
    disputeSlice.actions;
export default disputeSlice.reducer;
