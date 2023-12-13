import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles1.css';
import '../pages/teams/teams.css';
import '../pages/add/add.css';
import '../pages/players/players.css';
import '../pages/home/home.css';
import '../pages/games/games.css';
import Contact from '../pages/contact/contact';
import Games from '../pages/games/games';
import Home from '../pages/home/home';
import Players from '../pages/players/players';
import Teams from '../pages/teams/teams';
import Add from '../pages/add/add';
import Update from '../pages/update/update'

const Body = () => {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
export default Body