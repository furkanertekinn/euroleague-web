import { Route, Routes } from "react-router-dom";
import '../component/header.css';
import '../pages/teams/teams.css';
import '../pages/add/add.css';
import '../pages/players/players.css';
import '../pages/home/home.css';
import '../pages/games/games.css';
import Contact from '../pages/contact/contacts';
import Games from '../pages/games/game';
import Home from '../pages/home/homes';
import Players from '../pages/players/player';
import Teams from '../pages/teams/team';
import Add from '../pages/add/add';
import Update from '../pages/update/updates'

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/games" element={<Games />} />
      <Route path="/home" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/add" element={<Add />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  )
}
export default Router