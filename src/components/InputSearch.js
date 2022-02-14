// IMPORTS REACT
import React from 'react';
import { useDispatch } from 'react-redux';

// IMPORTS MATERIAL UI
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';

// LOCAL IMPORTS

import { startLoadingEpisodesByName } from '../redux/modules/episodes';
import { startSearchCharacterByName } from '../redux/modules/characters';

// styles
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '30%',

    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export const InputSearch = ({ typeSearch }) => {
    const dispatch = useDispatch();

    const [type, setType] = React.useState('');


    const handleSelectOnChange = (event) => {
        setType(event.target.value);
    };

    const handleOnKeyPress = (value) => {
        if (value.charCode === 13) {
            if (typeSearch === 'characters') {
                dispatch(startSearchCharacterByName(type, value.target.value))
            } else if (typeSearch === 'episodes') {
                dispatch(startLoadingEpisodesByName(type, value.target.value))
            }
        }
    }

    return <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'flex', alignItems: 'center' } }}>
        <Search onKeyPressCapture={value => handleOnKeyPress(value)}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search here.." inputProps={{ 'aria-label': 'search' }} />
        </Search>
        
        <Box sx={{ width: 150, marginLeft: { xs: '0px', md: '1rem' }, marginTop: { xs: '10px' } }} >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">filter</InputLabel>
                {
                    typeSearch === 'characters' ?
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="character"
                            onChange={handleSelectOnChange}
                        >
                            <MenuItem value={'name'}>name</MenuItem>
                            <MenuItem value={'status'}>status</MenuItem>
                            <MenuItem value={'species'}>species</MenuItem>
                            <MenuItem value={'gender'}>gender</MenuItem>
                        </Select>
                        :
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="episode"
                            onChange={handleSelectOnChange}
                        >
                            <MenuItem value={'name'}>name</MenuItem>
                            <MenuItem value={'episode'}>episode</MenuItem>

                        </Select>
                }
            </FormControl>
        </Box>
    </Box>
};
