import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"
import BillingTable from "../../components/table/table-billins"
import { onGetBillingsPending, onPayBilling } from "../../app/api";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { Billing } from "../../app/store/billing-slice";
import SnackbarAlert from "../../components/SnackBar";
import TitleComponent from "../../components/Title";

function PendingView() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const data = useAppSelector((stateBilling) => stateBilling.billing);
    const [alert, setAlert] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (state != null) {
            dispatch(onGetBillingsPending(state.clientId));
        } else {
            navigate('/');
        }
    }, [])

    const handleOptions = (data: Billing) => {
        const { period, category, clientId } = data
        dispatch(onPayBilling({ period, category, clientId }));
        setAlert(true);
    }

    return (
        <>
            {state &&
                <Container sx={{ mt: 4 }}>
                    <TitleComponent title="Pending Billings" />
                    <BillingTable data={data.billingsPending} handleOptions={handleOptions} />
                    {alert && data.payBilling && <SnackbarAlert data={{ message: "Paid correctly", billing: data.payBilling }} />}
                    {data.errorBilling && <SnackbarAlert data={{ message: data.errorBilling }} />}
                </Container>
            }
        </>
    )
}

export default PendingView
