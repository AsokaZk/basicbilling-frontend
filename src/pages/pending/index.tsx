import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"
import BillingTable from "../../components/table/table-billins"
import { onGetBillingsPending, onPayBilling } from "../../app/api";
import { useLocation } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { Billing } from "../../app/store/billing-slice";

function PendingView() {
    const { state } = useLocation();
    const data = useAppSelector((state) => state.billing);

    const dispatch = useAppDispatch();


    useEffect(() => {
        if (state.clientId != null && data.billingsPending.length == 0) {
            dispatch(onGetBillingsPending(state.clientId));
        }
    }, [])

    const handleOptions = (data: Billing) => {
        const { period, category, clientId } = data
        dispatch(onPayBilling({ period, category, clientId }));
        dispatch(onGetBillingsPending(state.clientId));
    }

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
                Pending Billings
            </Typography>
            <BillingTable data={data.billingsPending} handleOptions={handleOptions} />
        </Container>
    )
}

export default PendingView
