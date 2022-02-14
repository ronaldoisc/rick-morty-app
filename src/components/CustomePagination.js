import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// IMPORTS MATERIAL UI
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

// IMPORTS MATERIAL ICONS
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// LOCAL IMPORTS
import { startSearchCharacterByName } from '../redux/modules/characters';

export const CustomePagination = () => {

  const { data, activeSearch } = useSelector(state => state.character);
  const { type, name } = activeSearch;

  const dispatch = useDispatch();

  return <Stack spacing={2}>
    {
      // show the pagination component
      data.info &&
      <Pagination
        count={data.info.pages}
        onChange={(event, val) => {
          var index = val;
          dispatch(startSearchCharacterByName(type, name, index))
        }}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />

    }
  </Stack>
};
