import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch, useSelector } from 'react-redux';
import { startSearchCharacterByName } from '../redux/modules/characters';
export const CustomePagination = () => {
    const { data, activeSearch } = useSelector(state => state.character);
    const { type, name } = activeSearch;
    
    const dispatch = useDispatch();
    

    return <Stack spacing={2}>
        {
            data.info &&
            <Pagination
           
            
            count={data.info.pages}
            onChange={(event, val) => {
                var index=val;
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
