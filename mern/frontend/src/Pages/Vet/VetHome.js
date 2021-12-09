import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import TopNavBar from '../Pet Owner/TopNavBar';
import VetTopNav from './VetTopNav';

const VetHome = () => {
  const [vetData, setVetData] = useState();

  const getVetProfile = async (e) => {
    const res = await axios.get(
      `http://localhost:3030/Vet/vetDetails/profile/61a403f63dc19fc6094d71af`
    );
    console.log('res', res);
    setVetData(res.data);
  };

  useEffect(() => {
    getVetProfile();
  }, []);

  return (
    <div>
      <VetTopNav />
      <div style={{ textAlign: 'left', padding: '50px' }}>
        <h1>
          <b>Profile Details</b>
        </h1>
        <div
          style={{
            display: 'flex',
            width: '23%',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <img
              width='200px'
              src='https://media.istockphoto.com/photos/vet-picture-id530783619?k=6&m=530783619&s=170667a&w=0&h=Qq83zMu9fRAuEjjpElhXLy9bkGMRXOPVUA5uFwz4IxI='
              alt=''
            />
          </div>
          <div>
            {/* <p>
              <b>Name: Dr.Harrison</b>
            </p> */}
            <p>
              <b>Name: {vetData?.VetName}</b>
            </p>
            <p>
              <b>Email: {vetData?.Email}</b>
            </p>
            <p>
              <b>Gender: {vetData?.Gender}</b>
            </p>
            <p>
              <b>Age: {vetData?.Age}</b>
            </p>
            <p>
              <b>Expertise: {vetData?.Expertise}</b>
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: '', padding: '20px' }}>
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
