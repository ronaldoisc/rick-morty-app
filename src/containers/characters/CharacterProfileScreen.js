// IMPORTS REACT
import React, { useEffect } from 'react';

// IMPORT REACT-REDUX
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// IMPORTS REACT ROUTER
import { Outlet, useParams } from 'react-router-dom';

// IMPORTS MATERIAL
import { Box, Typography } from '@mui/material';

// IMPORTS CUSTOME COMPONENTS
import { startLoadingCharacterById } from '../../redux/modules/characters';
import { GridEpisodes } from '../episodes/GridEpisodes';
import {  CustomeCard } from '../../components/CustomeCard';
import { CustomeLoader} from '../../components/CustomeLoader';

export const CharacterProfileScreen = () => {

  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(startLoadingCharacterById(characterId))
  }, [characterId, dispatch]);

  const { activeCharacter: character, characterEpisodes } = useSelector(state => state.character);
  const {  isLoading } = useSelector(state => state.ui);

  return <>
    {
      // if loading is true, the app will show a loader
      isLoading === true ?
        <CustomeLoader loading={ isLoading} />
        :
        <div>
          <Outlet />
          <Box display={'flex'} flexDirection={'column'} justifyContent='center' alignItems={'center'}>
            <Typography variant='h2'>Character Profile</Typography>
            {/* show the character profile information */}
            <CustomeCard character={character} showCardActions={false} />
            <h1>((Episodes))</h1>
            {/* show the episodes that belong to the character selected */}
            <GridEpisodes episodes={characterEpisodes} />
          </Box>
        </div>
    }
  </>
};
