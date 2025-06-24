import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ReserveATable from './components/ReserveATable'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
  <Header/>
  <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservetable" element={<ReserveATable />} />
      </Routes>
  <Footer/>
  </>
  );
}

export default App;
