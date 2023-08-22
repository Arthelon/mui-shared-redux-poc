import {
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { Dispute, DisputeStatusEnum } from "redux-dispute-poc";
import { useGetDisputesQuery } from "../store/api";

const DISPUTE_STATUS_LABEL: Record<DisputeStatusEnum, string> = {
    [DisputeStatusEnum.Open]: "Open",
    [DisputeStatusEnum.Condeded]: "Conceded",
    [DisputeStatusEnum.Challenged]: "Challenged",
};

export const DisputeTable = () => {
    const { data, isLoading } = useGetDisputesQuery();
    const renderHeader = () => {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Create Time</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Amount</TableCell>
                </TableRow>
            </TableHead>
        );
    };

    const renderRow = (dispute: Dispute) => {
        return (
            <TableRow key={dispute.id}>
                <TableCell>{dispute.id}</TableCell>
                <TableCell>
                    {new Date(dispute.createTime).toDateString()}
                </TableCell>
                <TableCell>{DISPUTE_STATUS_LABEL[dispute.status]}</TableCell>
                <TableCell>{`$${dispute.amount}`}</TableCell>
            </TableRow>
        );
    };

    const renderDisputes = () => {
        if (isLoading) {
            return <CircularProgress />;
        }
        if (data?.length) {
            return data.map(renderRow);
        }

        return (
            <TableRow>
                <TableCell colSpan={4}>no records found</TableCell>
            </TableRow>
        );
    };

    return (
        <Table>
            {renderHeader()}
            <TableBody>{renderDisputes()}</TableBody>
        </Table>
    );
};
