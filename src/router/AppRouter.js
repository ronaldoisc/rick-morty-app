import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate

} from "react-router-dom";
import { CharactersScreen } from '../containers/App/CharactersScreen';
// import { CharactersScreen } from '../containers/App/CharactersScreen';
// import { EpisodesScreen } from '../containers/App/EpisodesScreen';
// import { CharacterProfileScreen } from '../containers/characters/CharacterProfileScreen';



export const AppRouter = () => {
  return <Router>
  <Routes>
     <Route exact path='/' element={<CharactersScreen/>}/>
     {/* <Route exact path='/character/:characterId' element={<CharacterProfileScreen/>}/> */}
     {/* <Route exact path='/episodes' element={<EpisodesScreen/>}/> */}
     {/* <Route path='/*' element={<Navigate to={'/characters'}/>} />  */}
   
  </Routes>
</Router>;
};

