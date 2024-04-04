import { useEffect } from "react";
import { Container, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { onGetBillingsHistory } from "../../app/api";
import BillingTable from "../../components/table/table-billins"

function HistoryView() {
    const dispatch = useAppDispatch();
    const billings = useAppSelector((state) => state.billing);

    useEffect(() => {
        dispatch(onGetBillingsHistory());
    }, [])
    return (
        <Container sx={{ mt: 4 }}>
            <Typography
                variant="h3"
                noWrap
                component="h3"
                sx={{
                    mr: 2,
                    mb: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                History
            </Typography>
            <BillingTable data={billings.billingsHistory} />
        </Container >
    )
}

export default HistoryView
