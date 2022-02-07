import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomePagination } from '../../components/CustomePagination';
import { InputSearch } from '../../components/InputSearch';
import { NavBar } from '../../components/NavBar';
import { startLoadingCharacters } from '../../redux/modules/characters';
import { GridCharacters } from '../characters/GridCharacters';



export const CharactersScreen = () => {
  const dispatch = useDispatch();

  const { data, activeSearch } = useSelector(state => state.character);
  const { loading } = useSelector(state => state.ui);
  console.log(loading);



  useEffect(() => {
    dispatch(startLoadingCharacters());
  }, [dispatch]);

  return <>
    {
      loading === true ?
        <h1>Cargando</h1>
        :
        (
          <>
            <NavBar />
            <Typography sx={{ fontSize: { xs: '2rem', md: '5rem' } }} color={'black'} textAlign='center' fontWeight={'bold'}>
              The Rick and Morty App
            </Typography>
            <InputSearch typeSearch={'characters'} />
            {
              activeSearch.type === null ?
                ''
                :
                <CustomePagination />

            }

            <GridCharacters characters={data.results} />
          </>
        )
    }
  </>;
};
