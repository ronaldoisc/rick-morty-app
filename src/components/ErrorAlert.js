import React from 'react';
// IMPORTS MATERIAL UI
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export const ErrorAlert = ({ message }) => {
    // Show the error that the api return
    return <div>
        <Alert severity="error">
            <AlertTitle>Error!</AlertTitle>
            <strong>{message}</strong>
        </Alert>
    </div>;
};
