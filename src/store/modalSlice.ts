import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = {
    isModalOpen: boolean;
    disputeId: string | null;
};

const modalInitialState: ModalState = {
    isModalOpen: false,
    disputeId: null,
};

const modalSlice = createSlice({
    name: "modal",
    initialState: modalInitialState,
    reducers: {
        clearDisputeId(state) {
            state.disputeId = null;
        },
        setDisputeId(state, action: PayloadAction<string>) {
            state.disputeId = action.payload;
        },
        openModal(state) {
            state.isModalOpen = true;
        },
        closeModal(state) {
            state.isModalOpen = false;
        },
    },
});

export const { clearDisputeId, setDisputeId, openModal, closeModal } =
    modalSlice.actions;
export default modalSlice.reducer;
