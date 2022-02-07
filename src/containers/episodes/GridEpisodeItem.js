import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const GridEpisodeItem = ({ episode }) => {
  return <Card sx={{ width: 200, margin: '1rem' }} style={{ backgroundColor: '#565A56' }}>
    <CardActionArea  >

      <CardContent>
        <Typography gutterBottom variant="h5" component="h5" color={'white'}>
         {episode.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="p">
          date: {episode.air_date}
        </Typography>
        <Typography gutterBottom variant="h6" component="p">
          episode: {episode.episode}
        </Typography>
        

      </CardContent>
    </CardActionArea>

  </Card>
};
