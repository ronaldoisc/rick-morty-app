import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { CustomeLoader } from '../../components/CustomeLoader';
import { InputSearch } from '../../components/InputSearch';
import { NavBar } from '../../components/NavBar';
import { startLoadingEpisodes } from '../../redux/modules/episodes';
import { GridEpisodes } from '../episodes/GridEpisodes';

export const EpisodesScreen = () => {
  const dispatch = useDispatch();

  const { list: episodes } = useSelector(state => state.episodes);
  const { loading } = useSelector(state => state.ui);



  useEffect(() => {
    dispatch(startLoadingEpisodes());
  }, [dispatch]);

  return <>
    {
      loading === true ?
      <CustomeLoader loading={loading}/>
        :
        <div>
           <Outlet />
          <NavBar />
          <InputSearch typeSearch={'episodes'} />
         <Typography variant='h3' fontWeight={'bold'}>
         ((Episodes))
         </Typography>
          <GridEpisodes episodes={episodes} />
        </div>
    }
  </>
};
