import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Activities from './../pages/activities/activities.jsx'; // Ajusta la ruta según la ubicación real de tu archivo Activities.jsximport { Routes, Route, Link, BrowserRouter} from "react-router-dom";


function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Activities />} />
          <Route path="/" element={<Activities />} />
          <Route path="*" element={(
            
          )}



        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRouter;