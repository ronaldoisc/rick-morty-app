import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { CustomeCard } from '../../components/CustomeCard';




export const GridCharacters = ({ characters }) => {
//  Grid to show all the characters
    return <Box sx={{ margin: '1rem' }}>
    <Typography sx={{ fontSize: { xs: '1rem', md: '2rem' } }}>
        Characters
    </Typography>
    <Grid container spacing={2}>
        {
            characters &&
            characters.map(character => {
                return <Grid key={character.id} item xs={12} sm={6} md={4} lg={3} >
                   <CustomeCard character={character}/>
                </Grid>
            })
        }
    </Grid>
</Box>;
};
