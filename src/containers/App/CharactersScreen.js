import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { CustomeLoader } from '../../components/CustomeLoader';
import { CustomePagination } from '../../components/CustomePagination';
import { ErrorAlert } from '../../components/ErrorAlert';
import { InputSearch } from '../../components/InputSearch';
import { NavBar } from '../../components/NavBar';
import { startLoadingCharacters } from '../../redux/modules/characters';
import { GridCharacters } from '../characters/GridCharacters';



export const CharactersScreen = () => {
  const dispatch = useDispatch();

  const { data, activeSearch } = useSelector(state => state.character);
  const { isLoading } = useSelector(state => state.ui);


  useEffect(() => {
    dispatch(startLoadingCharacters());
  }, [dispatch]);

  return <>
    {
       isLoading === true ?
        <CustomeLoader loading={ isLoading} />
        :
        (
          <>
           <Outlet />
            <NavBar />
            <Typography sx={{ fontSize: { xs: '2rem', md: '5rem' } }} color={'black'} textAlign='center' fontWeight={'bold'}>
              The Rick and Morty App
            </Typography>
            <InputSearch typeSearch={'characters'} />
            {/* show pagination when the user search something */}
            { activeSearch.type && <CustomePagination />}
            
            {/* if the search return empty, it will show custome alert else show gridCharactersComponent */}
            {
              data.error ? 
              <ErrorAlert message={data.error} /> :
              <GridCharacters characters={data.results} />
            }
          </>
        )
    }
  </>;
};
