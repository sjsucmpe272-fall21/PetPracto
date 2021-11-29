import React from 'react';
// import TopNavBar from '../Pet Owner/TopNavBar';
import { Link } from 'react-router-dom';
import VetTopNav from './VetTopNav';

const VetLandingPage = () => {
  return (
    <div>
      <VetTopNav />

      <div className='find-vets-div'>
        <div className='overlay'>
          <div className='overlay-display'>
            <h1>Welcome, Dr. Harrison</h1>

            {/* <Link to='/mapsPage'>
              <button type='button' class='btn btn-primary'>
                Show Appointments
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      {/* <div className='appointments-div'>
        <div className='overlay'>
          <div className='overlay-display'>
            <h1>
              Connect with experts. Book an appointment with a professional now.
            </h1>

            <Link to='/bookAppointment'>
              <button type='button' class='btn btn-primary'>
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      {/* <div className='meds-div'>
        <div className='overlay'>
          <div className='overlay-display'>
            <h1>
              Visit our online store and get a special discount if you're a Vet!
            </h1>
            <Link to='/medStore'>
              <button type='button' class='btn btn-primary'>
                View Store{' '}
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default VetLandingPage;
