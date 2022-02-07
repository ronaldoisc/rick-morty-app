import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import {CharactersScreen } from '../containers/App/CharactersScreen';
import { EpisodesScreen } from '../containers/App/EpisodesScreen';
import { CharacterProfileScreen } from '../containers/characters/CharacterProfileScreen';
const AppRouter = () => {
  return <BrowserRouter>
  <Routes>
    <Route exact path='/character' element={<CharactersScreen/>}/>
    <Route exact path='/character/:characterId' element={<CharacterProfileScreen/>}/>

    <Route exact path='/episodes' element={<EpisodesScreen/>}/>
    <Route path='/*' element={<Navigate to={'/character'}/>} />
   
  </Routes>
</BrowserRouter>;
};

export default AppRouter;
