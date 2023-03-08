import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import {
  BsHouseDoorFill, BsFillHouseAddFill, BsBookmarkStarFill,
  BsBookmarkCheckFill, BsFillBookmarkPlusFill, BsFillHouseDashFill,
} from 'react-icons/bs';
import { GoSignOut } from 'react-icons/go';
import mainLogo from '../assests/logo-dark.png';
import SocialIcon from './SocialIcon';

function Sidebar() {
  const width = window.innerWidth < 768;

  return (
    <div className="sidebar">
      <div className="logo-box">
        <img className="nav-logo" src={mainLogo} alt="App Logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/" className={width ? 'mobile-nav-link' : 'nav-box'} exact>
          HOUSE LIST
          <BsHouseDoorFill />
        </NavLink>

        <NavLink to="/add-house" className={width ? 'mobile-nav-link' : 'nav-box'}>
          ADD HOUSE
          <BsFillHouseAddFill />
        </NavLink>

        <NavLink to="/delete-house" className={width ? 'mobile-nav-link' : 'nav-box'}>
          DELETE HOUSE
          <BsFillHouseDashFill />
        </NavLink>

        <NavLink to="/reservelist" className={width ? 'mobile-nav-link' : 'nav-box'}>
          RESERVE LIST
          <BsBookmarkStarFill />
        </NavLink>

        <NavLink to="/my-reservations" className={width ? 'mobile-nav-link' : 'nav-box'}>
          MY RESERVATIONS
          <BsBookmarkCheckFill />
        </NavLink>

        <NavLink to="/reserves" className={width ? 'mobile-nav-link' : 'nav-box'}>
          ADD RESERVATION
          <BsFillBookmarkPlusFill />
        </NavLink>

        <NavLink to="/logout" className={width ? 'mobile-nav-link logout' : 'nav-box logout'}>
          <GoSignOut />
          Log out
        </NavLink>
      </div>

      <div className="social-box">
        <SocialIcon />
      </div>
    </div>
  );
}
export default Sidebar;
