import { Routes, Route } from 'react-router-dom';
import AddHouse from './components/AddHouse';
import HouseList from './components/HouseList';
// import ReserveList from './components/ReserveList';
import MyReservations from './components/MyReservations';
import ReservationForm from './components/ReservationForm';
import DeleteHouse from './components/DeleteHouse';
import './App.css';
import Details from './webpages/details';
import Reserves from './webpages/reserves';
import ReserveList from './webpages/reservelist';
import Login from './components/Login';
import Logout from './components/Logout';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">

      <div className="sidebar-container desktop">
        <Sidebar />
      </div>

      <div className="main-container">
        <h1>Main Page</h1>
        <Routes>
          <Route path="/" exact="true" element={<HouseList />} />
          <Route path="/houses/:id" element={<Details />} />
          <Route path="/reserves" element={<Reserves />} />
          <Route path="/add-house" element={<AddHouse />} />
          <Route path="/reservelist" element={<ReserveList />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          <Route path="/delete-house" element={<DeleteHouse />} />
          <Route path="/reservation-form/:houseId" element={<ReservationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/reserve-list" element={<ReserveList />} /> */}
        </Routes>
      </div>

    </div>

  );
}

export default App;
