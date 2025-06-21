import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Billie from "./components/Billie";
import Event from "./components/Event";
import WorldGame from "./components/WorldGame";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/event">Event</Link>
        <Link to="/worldgame">World Game</Link>
        <Link to="/billie">Billie</Link>
      </nav>

      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/worldgame" element={<WorldGame />} />
        <Route path="/billie/:nameParam?" element={<Billie />} />
      </Routes>
    </Router>
  );
}

export default App;
