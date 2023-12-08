import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles1.css';
import './styles2.css';
import './add.css';
import './player.css';
import './home.css';
import './games.css';
import Contact from '../pages/Contact';
import Games from '../pages/Games';
import Home from '../pages/Home';
import Players from '../pages/Players';
import Teams from '../pages/Teams';
import Add from '../pages/Add';
import Update from '../pages/Update'

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