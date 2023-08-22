import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
    isModalOpen: boolean;
};

const modalInitialState: ModalState = {
    isModalOpen: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState: modalInitialState,
    reducers: {
        openModal(state) {
            state.isModalOpen = true;
        },
        closeModal(state) {
            state.isModalOpen = false;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
