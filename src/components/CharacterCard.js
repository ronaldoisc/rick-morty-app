import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { LocationOn } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';


export const CharacterCard = ({ character }) => {
    return <Card sx={{ Maxwidth: 345 }} style={{ backgroundColor: '#C2C6C8' }}>
        <CardMedia
            component="img"
            height="200"
            image={character.image}
            alt="green iguana"
        />
        <CardContent>
            <Box display={'flex'} flexDirection='column' justifyContent={'center'} alignItems='center'>
                <Typography gutterBottom variant="h4" component="h4" fontWeight={'bold'} >
                    {character.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" color={character.status === 'Alive' ? 'green' : 'red'}>
                    status: {character.status}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    {character.species} - {character.gender}
                </Typography>

                <Box display={'flex'} justifyContent='center'>

                    <LocationOn />

                    <Typography gutterBottom variant="p" fontSize={'1rem'} component="div">
                        {character.location && character.location.name}
                    </Typography>

                </Box>

            </Box>


        </CardContent>

    </Card>;
};
