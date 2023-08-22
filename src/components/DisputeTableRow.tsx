import { Chip, Icon, IconButton, TableCell, TableRow } from "@mui/material";
import { Dispute, DisputeStatusEnum } from "redux-dispute-poc";
import ReportIcon from "@mui/icons-material/Report";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import { useAppDispatch } from "../hooks";
import { challengeDispute, concedeDispute } from "../store/disputeSlice";

type DisputeTableRowProps = Dispute;

const DISPUTE_STATUS_LABEL: Record<DisputeStatusEnum, React.ReactNode> = {
    [DisputeStatusEnum.Open]: (
        <Chip label="Open" variant="outlined" color="primary" />
    ),
    [DisputeStatusEnum.Condeded]: <Chip label="Conceded" color="primary" />,
    [DisputeStatusEnum.Challenged]: <Chip label="Challenged" color="error" />,
};

const DisputeTableRow = ({
    id,
    createTime,
    status,
    amount,
}: DisputeTableRowProps) => {
    const dispatch = useAppDispatch();
    const handleConcede = () => {
        console.log("HANDLE CONCEDE");
        dispatch(concedeDispute(id));
    };
    const handleChallenge = () => {
        console.log("HANDLE CHALLENGE");
        dispatch(challengeDispute(id));
    };

    const renderActionButtons = () => {
        if (status === 0) {
            return (
                <>
                    <IconButton
                        aria-label="Concede Dispute"
                        onClick={handleConcede}
                    >
                        <AssignmentReturnIcon color="secondary" />
                    </IconButton>
                    <IconButton
                        aria-label="Challenge Dispute"
                        onClick={handleChallenge}
                    >
                        <ReportIcon color="secondary" />
                    </IconButton>
                </>
            );
        }
        return null;
    };

    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>{new Date(createTime).toDateString()}</TableCell>
            <TableCell>{DISPUTE_STATUS_LABEL[status]}</TableCell>
            <TableCell>{`$${amount}`}</TableCell>
            <TableCell>{renderActionButtons()}</TableCell>
        </TableRow>
    );
};

export default DisputeTableRow;
