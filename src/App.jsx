import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Clients from './components/Clients/Clients';
import Appointments from './components/Appointments/Appointments';
import Doctors from './components/Doctors/Doctors';
import Events from './components/Events/Events';
import Navigation from './components/Navigation/Navigation';
import Notfound from './components/Not Found/Notfoung';

function App() {
  return (
  <BrowserRouter>
  <Navigation></Navigation>
  <Routes>
	<Route index element={<Homepage />} />	
	<Route path='clients' element={<Clients />} />
	<Route path='appointments' element={<Appointments />} />
	<Route path='doctors' element={<Doctors />} />
	<Route path='events' element={<Events />} />
	<Route path='*' element={<Notfound/>} />'
  </Routes>
  </BrowserRouter>
  );
}

export default App;
