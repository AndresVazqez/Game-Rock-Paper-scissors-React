import './App.scss';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import HomePages from './Pages/HomePage/HomePage';
import GamePage from './Pages/GamePage/GamePage';



function App() {





  return (
    
      <Router>
        <Routes>




          <Route path='/' element={<HomePages />} />
          <Route path='/game' element={<GamePage />} />
          <Route path='/*' element={<Navigate to="/" />} />


        </Routes>
      </Router>
  
  );
}

export default App;
