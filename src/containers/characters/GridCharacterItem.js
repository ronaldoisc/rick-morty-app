import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Avatar, Box, CardActionArea, CardActions} from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

export const GridCharacterItem = ({ character }) => {
  
// styles
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: character.status === 'Alive' ? '#44b700' : 'red',
      color: character.status === 'Alive' ? '#44b700' : 'red',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

// card component to show the data character
  return <Card sx={{ maxWidth: 345 }}>
    <CardActionArea  >
      <Box display={'flex'} margin='10px'>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt={character.name} src="/static/images/avatar/1.jpg" />

        </StyledBadge>
        <Typography gutterBottom variant="h6" component="div">
          {character.name}
        </Typography>
      </Box>

      <CardMedia
        component="img"
        height="200"
        image={character.image}
        alt="character"
      />
      <CardContent>
        <Chip label={character.gender} size="small" color={'warning'} variant='outlined' />
        <Chip label={character.status} size="small" color={character.status === 'Alive' ? 'success' : 'primary'} />
        <Typography variant="body2" color="text.secondary">
          specie: {character.species}
        </Typography>
      </CardContent>

    </CardActionArea>
    <CardActions>
      {/* link to redirect characterProfileScreen  */}
      <Link to={`/rick-morty/character/${character.id}`}>
      detalles</Link>
    </CardActions>
  </Card>
    ;
};
