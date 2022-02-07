import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        <h1>cargando...</h1>
        :
        <div>
          <NavBar />
          <InputSearch typeSearch={'episodes'} />
          <h1>((Episodes))</h1>
          <GridEpisodes episodes={episodes} />
        </div>
    }
  </>
};
