import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { onGetClients } from "../../app/api/client";
import ClientTable from "../../components/table/table-clients";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SnackbarAlert from "../../components/SnackBar";
import TitleComponent from "../../components/Title";

function ClientView() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const clients = useAppSelector((state) => state.clients);

    useEffect(() => {
        dispatch(onGetClients());
    }, [])

    const handleOptions = (data: string) => {
        navigate('/pending', { state: { clientId: data } });
    }

    return (
        <Container sx={{ mt: 4 }}>
            <TitleComponent title="Clients" />
            <ClientTable data={clients.clients} handleOptions={handleOptions} />
            {clients.errorClients && <SnackbarAlert data={{ message: clients.errorClients }} />}
        </Container>
    )
}

export default ClientView
