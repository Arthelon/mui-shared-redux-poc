import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { useAppSelector } from "../hooks";
import { Dispute } from "redux-dispute-poc";

export const DisputeTable = () => {
    const disputes = useAppSelector((state) => state.dispute.disputes);

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
            <TableRow>
                <TableCell></TableCell>
            </TableRow>
        );
    };

    return (
        <Table>
            {renderHeader()}
            <TableBody>
                {disputes.length ? (
                    disputes.map(renderRow)
                ) : (
                    <TableRow>
                        <TableCell colSpan={4}>no records found</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};
