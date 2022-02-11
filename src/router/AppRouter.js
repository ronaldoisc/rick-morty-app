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
     <Route exact path='/rick-morty-app/' element={<CharactersScreen/>}/>
     <Route exact path='/rick-morty-app/character/:characterId/' element={<CharacterProfileScreen/>}/>
     <Route exact path='/rick-morty-app/episodes/' element={<EpisodesScreen/>}/>
     <Route path='/rick-morty-app/*' element={<Navigate to={'rick-morty-app/'}/>} />
  </Routes>
</Router>;
};

