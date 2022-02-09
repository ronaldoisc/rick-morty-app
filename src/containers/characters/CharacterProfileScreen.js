import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { startLoadingCharacterById } from '../../redux/modules/characters';
import { useSelector } from 'react-redux';

import { GridEpisodes } from '../episodes/GridEpisodes';
import { CharacterCard } from '../../components/CharacterCard';
import { CustomeLoader} from '../../components/CustomeLoader';

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
      // if loading is true, the app will show a loader
      loading === true ?
        <CustomeLoader loading={loading} />
        :
        <div>
          <Outlet />
          <Box display={'flex'} flexDirection={'column'} justifyContent='center' alignItems={'center'}>
            <Typography variant='h2'>Character Profile</Typography>
            {/* show the character profile information */}
            <CharacterCard character={character} />
            <h1>((Episodes))</h1>
            {/* show the episodes that belong to the character selected */}
            <GridEpisodes episodes={characterEpisodes} />
          </Box>
        </div>
    }
  </>
};
