import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import QxtHome from './components/QxtHome';
import QxtNavBar from './components/QxtNavBar';
import QxtListUser from './components/QxtListUser';
import QxtCreateUser from './components/QxtCreateUser';
import QxtEditUser from './components/QxtEditUser';

export default function QxtApp() {
  return (
    <div>
      <div className="container border my-3">
        <h1>ReactJs - MockAPI - MinniProject - [QuÁCH XUÂN tHỊNH - K23CNT3]</h1>
        <hr />
        <Router>
          <QxtNavBar />
          <Routes>
            <Route path="/" element={<QxtHome />} />
            <Route path="/list-user" element={<QxtListUser />} />
            <Route path="/create-user" element={<QxtCreateUser />} />
            <Route path="/edit-user/:id" element={<QxtEditUser />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}