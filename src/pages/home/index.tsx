import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { onCreateBilling, onGetBillings, onGetBillingsSearch, onPayBilling } from "../../app/api";
import { Container, Grid, Typography } from "@mui/material";
import SelectCategory from "../../components/Select";
import BillingTable from "../../components/table/table-billins";
import { Billing } from "../../app/store/billing-slice";
import BasicModal from "../../components/Modal";

const categories = [
    {
        value: 'ALL',
        label: 'ALL',
    },
    {
        value: 'WATER',
        label: 'WATER',
    },
    {
        value: 'ELECTRICITY',
        label: 'ELECTRICITY',
    },
    {
        value: 'SEWER',
        label: 'SEWER',
    }
];

function HomeView() {
    const dispatch = useAppDispatch();
    const billings = useAppSelector((state) => state.billing);

    useEffect(() => {
        dispatch(onGetBillings());
    }, [])

    const handleOptions = (data: Billing) => {
        const { period, category, clientId } = data
        dispatch(onPayBilling({ period, category, clientId }));
        dispatch(onGetBillings());
    }

    const handleChangeSelect = (category: string) => {
        if (category == 'ALL') {
            dispatch(onGetBillings());
        } else {
            dispatch(onGetBillingsSearch(category));
        }
    };

    const handleSubmit = (data: {}) => {
        dispatch(onCreateBilling(data));
        console.log(data);
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
                Billings
            </Typography>
            <Grid container justifyContent={'space-between'} sx={{ my: 4 }}>
                <SelectCategory handleChangeSelect={handleChangeSelect} data={categories} />
                <BasicModal handleSubmit={handleSubmit} />
            </Grid>
            <BillingTable data={billings.billings} handleOptions={handleOptions} />
        </Container >
    )
}

export default HomeView
