import React from 'react';
import { NavLink } from 'react-router-dom';
import TopNavBar from './TopNavBar';

const OwnerProfile = () => {
  return (
    <div>
      <TopNavBar />
      <div style={{ textAlign: 'left', padding: '50px' }}>
        <h1>
          <b>Profile Details</b>
        </h1>
        <p>
          <b>Name : John Doe</b>
        </p>
        <p>
          <b>Email : johndoe@gmail.com</b>
        </p>
        <p>
          <b>Gender : Male</b>
        </p>
        <p>
          <b>Age : 37</b>
        </p>
        <p>
          <b>Location : Santa Clara County</b>
        </p>
        <div style={{ width: '200px', height: '200px', objectFit: 'contain' }}>
          <img
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
            // src='https://townofbeekmantown.com/wp-content/uploads/2019/06/2-dog.jpg'
            src='https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80'
            alt=''
          />
        </div>

        <p>
          <b>Pet Type : Dog</b>
        </p>
        <p>
          <b>Pet Name : Shiro</b>
        </p>
        <p>
          <b>Pet Breed : Golden Retriever</b>
        </p>
        <p>
          <b>Pet Age : 9 months</b>
        </p>
      </div>
      <div style={{ backgroundColor: '' }}>
        <NavLink style={{ fontSize: '24px' }} to='/ownerPastAppointments'>
          {' '}
          View Past Appointments
        </NavLink>
      </div>
    </div>
  );
};

export default OwnerProfile;
