import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { onCreateBilling, onGetBillings, onGetBillingsSearch, onPayBilling } from "../../app/api";
import { Container, Grid, Typography } from "@mui/material";
import SelectCategory from "../../components/Select";
import BillingTable from "../../components/table/table-billins";
import { Billing } from "../../app/store/billing-slice";
import BasicModal from "../../components/Modal";
import SnackbarAlert from "../../components/SnackBar";
import TitleComponent from "../../components/Title";

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
    const [alert, setAlert] = useState(false);
    const dispatch = useAppDispatch();
    const billings = useAppSelector((state) => state.billing);

    useEffect(() => {
        dispatch(onGetBillings());
    }, [])

    const handleOptions = (data: Billing) => {
        const { period, category, clientId } = data
        dispatch(onPayBilling({ period, category, clientId }));
        setAlert(true);
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
    }

    return (
        <Container sx={{ mt: 4 }}>
            <TitleComponent title="Billings" />
            <Grid container justifyContent={'space-between'} sx={{ my: 4 }}>
                <SelectCategory handleChangeSelect={handleChangeSelect} data={categories} />
                <BasicModal handleSubmit={handleSubmit} />
            </Grid>
            <BillingTable data={billings.billings} handleOptions={handleOptions} />
            {billings.errorBilling && <SnackbarAlert data={{ message: billings.errorBilling }} />}
            {alert && billings.payBilling && <SnackbarAlert data={{ message: "Paid correctly", billing: billings.payBilling }} />}
        </Container >
    )
}

export default HomeView
