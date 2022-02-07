import React from 'react';
import Box from '@mui/material/Box';
import { GridEpisodeItem } from './GridEpisodeItem';


export const GridEpisodes = ({ episodes }) => {


    return <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} justifyContent='space-around'>
        {
            episodes.map(episode => {
                return <GridEpisodeItem key={episode.id} episode={episode} />
            })
        }

    </Box>


};
