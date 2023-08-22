import { Box, Button, Modal, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeModal } from "../store/modalSlice";
import { useState } from "react";
import { addDispute } from "../store/disputeSlice";
import { DisputeStatusEnum } from "redux-dispute-poc";

const containerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    flexDirection: "column",
    height: 300,
    p: "20px",
};

const AddDisputeModal = () => {
    const [amount, setAmount] = useState("0");
    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector((state) => state.modal.isModalOpen);
    const latestId = useAppSelector((state) => {
        const disputes = state.dispute.disputes;
        if (disputes.length === 0) {
            return 1;
        }
        return Number(disputes[disputes.length - 1].id);
    });

    const handleModalClose = () => {
        dispatch(closeModal());
    };
    const handleCreateDispute = () => {
        const parsedAmount = parseInt(amount, 10);
        dispatch(
            addDispute({
                id: latestId + 1,
                amount: parsedAmount,
                createTime: new Date().toString(),
                status: DisputeStatusEnum.Open,
            })
        );

        handleModalClose();
    };

    return (
        <Modal
            open={isModalOpen}
            onClose={handleModalClose}
            aria-labelledby="Add Disputes"
            aria-describedby="Modal to add a new dispute"
        >
            <Box sx={containerStyle}>
                <h2>Add Dispute</h2>

                <TextField
                    id="amount-input"
                    label="Dispute Amount"
                    variant="outlined"
                    type="number"
                    value={amount}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAmount(event.target.value);
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "1rem" }}
                    onClick={handleCreateDispute}
                >
                    Create Dispute
                </Button>
            </Box>
        </Modal>
    );
};

export default AddDisputeModal;
