// EXTERNAL IMPORTS
import React from 'react';
import { BounceLoader } from 'react-spinners';

// IMPORTS MATERIAL UL
import { css } from "@emotion/react";
import { Box, Typography } from '@mui/material';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const CustomeLoader = ({ isLoading }) => {
    return <Box display={'flex'} height='100vh' flexDirection='column' justifyContent='center' alignItems={'center'}>
        <BounceLoader color={"blue"} loading={isLoading} css={override} size={100} margin={2} />
        <Typography fontWeight={'bold'}>
            Loading data...
        </Typography>
    </Box>;
};
