import React from 'react';
import { NavLink } from 'react-router-dom';
import TopNavBar from '../Pet Owner/TopNavBar';
import VetTopNav from './VetTopNav';

const VetHome = () => {
  return (
    <div>
      <VetTopNav />
      <div style={{ textAlign: 'left', padding: '50px' }}>
        <h1>
          <b>Profile Details</b>
        </h1>
        <p>
          <b>Name : Dr. Harrison</b>
        </p>
        <p>
          <b>Email : harrison@gmail.com</b>
        </p>
        <p>
          <b>Gender : Male</b>
        </p>
        <p>
          <b>Age : 52</b>
        </p>
        <p>
          <b>Expertise : Dermatology</b>
        </p>

        <div style={{ backgroundColor: '' }}>
          <NavLink style={{ fontSize: '24px' }} to='/vetAppointments'>
            {' '}
            View Past Appointments
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VetHome;
