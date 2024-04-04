import { useEffect } from "react";
import { Container, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { onGetBillingsHistory } from "../../app/api";
import BillingTable from "../../components/table/table-billins"
import SnackbarAlert from "../../components/SnackBar";
import TitleComponent from "../../components/Title";

function HistoryView() {
    const dispatch = useAppDispatch();
    const billings = useAppSelector((state) => state.billing);

    useEffect(() => {
        dispatch(onGetBillingsHistory());
    }, [])
    return (
        <Container sx={{ mt: 4 }}>
            <TitleComponent title="History" />
            <BillingTable data={billings.billingsHistory} />
            {billings.errorBilling && <SnackbarAlert data={{ message: billings.errorBilling }} />}
        </Container >
    )
}

export default HistoryView
