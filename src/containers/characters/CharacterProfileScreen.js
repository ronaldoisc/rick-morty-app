import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { startLoadingCharacterById } from '../../redux/modules/characters';
import { useSelector } from 'react-redux';

import { GridEpisodes } from '../episodes/GridEpisodes';
import { CharacterCard } from '../../components/CharacterCard';
import { Louder } from '../../components/Louder';

export const CharacterProfileScreen = () => {

  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(startLoadingCharacterById(characterId))
  }, [characterId, dispatch]);

  const { activeCharacter: character, characterEpisodes } = useSelector(state => state.character);
  const { loading } = useSelector(state => state.ui);

  return <>
    {
      loading === true ?
        <Louder loading={loading} />
        :
        <Box display={'flex'} flexDirection={'column'} justifyContent='center' alignItems={'center'}>
          <Typography variant='h2'>Character Profile</Typography>

          <CharacterCard character={character} />
          <h1>((Episodes))</h1>
          <GridEpisodes episodes={characterEpisodes} />
        </Box>
     }
  </>
};
