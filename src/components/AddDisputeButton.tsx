import { Button } from "@mui/material";
import { useAppDispatch } from "../hooks";
import { openModal } from "../store/modalSlice";

const AddDisputeButton = () => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(openModal());
    };

    return (
        <Button
            style={{ marginTop: "1rem" }}
            color="primary"
            onClick={handleClick}
            variant="contained"
        >
            Add Dispute
        </Button>
    );
};

export default AddDisputeButton;
