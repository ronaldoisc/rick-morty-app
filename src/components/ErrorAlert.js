import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export const ErrorAlert = ({ message }) => {
    return <div>
        <Alert severity="error">
            <AlertTitle>Error!</AlertTitle>
            <strong>{message}</strong>
        </Alert>
    </div>;
};
