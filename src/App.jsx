import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgiluxHome from './Components/AgiluxHome/AgiluxHome';
import './App.css';
import AgiluxNavigation from './Components/AgiluxNavigation/AgiluxNavigation';

function App() {
  return (
    <Router>
      <AgiluxNavigation />
      <Routes>

        <Route exact path="/" element={<AgiluxHome />} />
      </Routes>
    </Router>
  );
}

export default App;
