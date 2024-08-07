
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import DriftPage from '../driftpage/DriftPage';
import TimeAttackPage from '../timeattackpage/TimeAttackPage';
import ForzaPage from '../forzapage/ForzaPage';
import Menu from '../menu/Menu';

function App() {
  return (
    <Router>
      <div>
        <Menu />
          <div className="page">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/drift" element={<DriftPage />} />
              <Route path="/timeattack" element={<TimeAttackPage />} />
              <Route path="/forza" element={<ForzaPage />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App