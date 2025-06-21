import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Billie from "./components/Billie";
import Event from "./components/Event";
import WorldGame from "./components/WorldGame";

function App() {
  return (
    <Router>
      <Event />
      <WorldGame />
      <Routes>
        <Route path="/event" element={<Event />} />
        <Route path="/world-game" element={<WorldGame />} />
        <Route path="/billie/:nameParam?" element={<Billie />} />
      </Routes>
    </Router>
  );
}

export default App;
