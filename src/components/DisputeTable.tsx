import {
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { useGetDisputesQuery } from "../store/api";
import DisputeTableRow from "./DisputeTableRow";
import { useAppSelector } from "../hooks";

export const DisputeTable = () => {
    const { isLoading } = useGetDisputesQuery();
    const disputes = useAppSelector((state) => state.dispute.disputes);

    const renderHeader = () => {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Create Time</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
        );
    };

    const renderDisputes = () => {
        if (isLoading) {
            return (
                <TableRow>
                    <CircularProgress />
                </TableRow>
            );
        }
        if (disputes.length) {
            return disputes.map((dispute) => (
                <DisputeTableRow key={dispute.id} {...dispute} />
            ));
        }

        return (
            <TableRow>
                <TableCell colSpan={5}>no records found</TableCell>
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
