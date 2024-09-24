import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgiluxHome from './Components/AgiluxHome/AgiluxHome';
import './App.css';
import AgiluxNavigation from './Components/AgiluxNavigation/AgiluxNavigation';
import AppDevelopment from './Components/MinimalComponent/AppDevelopmentProjects/AppDevelopment';
import WebDevelopment from './Components/MinimalComponent/WebDevelopmentProjects/WebDevelopment';
import AgiluxAboutUs from './Components/AgiluxAboutUs/AgiluxAboutUs';

function App() {
  return (
    <Router>
      <AgiluxNavigation />
      <Routes>

        <Route exact path="/" element={<AgiluxHome />} />
        <Route exact path="/agiluxaboutus" element={<AgiluxAboutUs />} />
        <Route exact path="/appdevelopment" element={<AppDevelopment />} />
        <Route exact path="/webdevelopment" element={<WebDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App;
