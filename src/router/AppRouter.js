import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,


} from "react-router-dom";
import { CharactersScreen } from '../containers/App/CharactersScreen';
import { EpisodesScreen } from '../containers/App/EpisodesScreen';
import { CharacterProfileScreen } from '../containers/characters/CharacterProfileScreen';


export const AppRouter = () => {
  return <Router>
  <Routes>
     <Route exact path='/rick-morty/' element={<CharactersScreen/>}/>
     <Route exact path='/rick-morty/character/:characterId/' element={<CharacterProfileScreen/>}/>
     <Route exact path='/rick-morty/episodes/' element={<EpisodesScreen/>}/>
     <Route path='/rick-morty/*' element={<Navigate to={'/rick-morty/'}/>} />
  </Routes>
</Router>;
};

