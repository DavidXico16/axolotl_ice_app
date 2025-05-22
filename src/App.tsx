
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar/Navbar';
import PageQuienesSomos from './pages/PageQuinesSomos/PageQuienesSomos';
import Conocenos from './pages/Conocenos/Conocenos';

function App() {
  return (
    <Router>
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/quienesSomos" element={<PageQuienesSomos />} />
        <Route path="/conocenos" element={<Conocenos />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default App
