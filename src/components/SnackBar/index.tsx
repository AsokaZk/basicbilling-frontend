import * as React from 'react';
import { Transition } from 'react-transition-group';
import { styled } from '@mui/system';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseIcon from '@mui/icons-material/Close';
import { Snackbar } from '@mui/base/Snackbar';
import { SnackbarCloseReason } from '@mui/base/useSnackbar';
import { Billing } from '../../app/store/billing-slice';
import { ReportProblemRounded } from '@mui/icons-material';

type Props = {
    data: { message: string, billing?: Billing };
};
export default function SnackbarAlert({ data }: Props) {
    const [open, setOpen] = React.useState(false);
    const [exited, setExited] = React.useState(true);
    const nodeRef = React.useRef(null);

    const handleClose = (_: any, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    React.useEffect(() => {
        setOpen(true);
    }, [data])

    const handleOnEnter = () => {
        setExited(false);
    };

    const handleOnExited = () => {
        setExited(true);
    };

    return (
        <StyledSnackbar
            autoHideDuration={5000}
            open={open}
            onClose={handleClose}
            exited={exited}
            key={data?.billing?.id.toString() || data.message}
        >
            <Transition
                timeout={{ enter: 400, exit: 400 }}
                in={open}
                appear
                unmountOnExit
                onEnter={handleOnEnter}
                onExited={handleOnExited}
                nodeRef={nodeRef}
            >
                {(status) => (
                    <SnackbarContent
                        style={{
                            transform: positioningStyles[status],
                            transition: 'transform 300ms ease',
                            backgroundColor: data.billing ? 'green' : 'red',
                        }}
                        ref={nodeRef}
                    >
                        {data.billing &&
                            <CheckRoundedIcon
                                sx={{
                                    flexShrink: 0,
                                    width: '1.25rem',
                                    height: '1.5rem',
                                }}
                            />}
                        {!data.billing &&
                            <ReportProblemRounded
                                sx={{
                                    flexShrink: 0,
                                    width: '1.25rem',
                                    height: '1.5rem',
                                }}
                            />}
                        <div className="snackbar-message">
                            <p className="snackbar-title">{data.message}</p>
                            {data.billing &&
                                <p className="snackbar-description">
                                    {`${data.billing.category} ${data.billing.period} ${data.billing.status}`}
                                </p>
                            }
                        </div>
                        <CloseIcon onClick={handleClose} className="snackbar-close-icon" />
                    </SnackbarContent>
                )}
            </Transition>
        </StyledSnackbar>
    );
}

const blue = {
    0: "#fff",
    50: "#b7e0ff",
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const StyledSnackbar = styled(Snackbar)`
  position: fixed;
  z-index: 5500;
  display: flex;
  bottom: 16px;
  right: 16px;
  max-width: 560px;
  min-width: 300px;
`;

const SnackbarContent = styled('div')(
    ({ theme }) => `
  display: flex;
  gap: 8px;
  overflow: hidden;
  background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[500]};
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? blue[700] : blue[50]};
  box-shadow: ${theme.palette.mode === 'dark'
            ? `0 2px 16px rgba(0,0,0, 0.5)`
            : `0 2px 16px ${blue[200]}`
        };
  padding: 0.75rem;
  color: ${theme.palette.mode === 'dark' ? blue[200] : blue[0]};
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  text-align: start;
  position: relative;

  & .snackbar-message {
    flex: 1 1 0%;
    max-width: 100%;
  }

  & .snackbar-title {
    margin: 0;
    line-height: 1.5rem;
    margin-right: 0.5rem;
  }

  & .snackbar-description {
    margin: 0;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${theme.palette.mode === 'dark' ? blue[400] : blue[50]};
  }

  & .snackbar-close-icon {
    cursor: pointer;
    flex-shrink: 0;
    padding: 2px;
    border-radius: 4px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? blue[800] : blue[300]};
    }
  }
  `,
);

const positioningStyles = {
    entering: 'translateX(0)',
    entered: 'translateX(0)',
    exiting: 'translateX(500px)',
    exited: 'translateX(500px)',
    unmounted: 'translateX(500px)',
};