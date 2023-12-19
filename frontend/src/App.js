import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import MeetingForm from './components/MeetingForm';
import Navbar from './components/Navbar';
import RoomCreate from './components/RoomCreate';
import EndMeeting from './components/EndMeeting';
import StartMeeting from './components/StartMeeting';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
         <Route path="/create-meeting" element={<MeetingForm />} />
          <Route path='/create-room' element={<RoomCreate />} />
          <Route path='/start-meeting' element={<StartMeeting />} />
          <Route path="/end-meeting" element={<EndMeeting />} />
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
