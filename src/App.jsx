import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AgiluxHome from './Components/AgiluxHome/AgiluxHome';
import './App.css';
import AgiluxNavigation from './Components/AgiluxNavigation/AgiluxNavigation';
import AppDevelopment from './Components/MinimalComponent/AppDevelopmentProjects/AppDevelopment';
import WebDevelopment from './Components/MinimalComponent/WebDevelopmentProjects/WebDevelopment';
import AgiluxAboutUs from './Components/AgiluxAboutUs/AgiluxAboutUs';
import AgiluxFooter from './Components/AgiluxFooter/AgiluxFooter';
import AgiluxBlog from './Components/AgiluxBlog/AgiluxBlog';
import AppDevelopmentServices from './Components/MinimalComponent/AgiluxServicesExplain/AppDevelopementServices';
import CommonServices from './Components/MinimalComponent/CommonServices/CommonServices';

function App() {
  return (
    <Router>
      <AgiluxNavigation />
      <Routes>

        <Route exact path="/" element={<AgiluxHome />} />
        <Route exact path="/agiluxaboutus" element={<AgiluxAboutUs />} />
        <Route exact path="/agiluxblog" element={<AgiluxBlog />} />
        <Route exact path="/appdevelopment" element={<AppDevelopment />} />
        <Route exact path="/webdevelopment" element={<WebDevelopment />} />
        <Route exact path="/appdevelopmentservices" element={<AppDevelopmentServices />} />
        <Route exact path="/services/:service" element={<CommonServices />} />
      </Routes>
      <AgiluxFooter />
    </Router>
  );
}

export default App;
