// import React from 'react'
// import TopNavBar from './TopNavBar'

// const LandingPage = () => {
//     return (
//         <div>
//             <TopNavBar />
//             Landing Page
//         </div>
//     )
// }

// export default LandingPage

// console.log(this.props.location.state.email);

import React from 'react';
import TopNavBar from './TopNavBar';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <TopNavBar />

      <div className='find-vets-div'>
        <div className='overlay'>
          <div className='overlay-display'>
            <h1>Find and connect with Vets around you.</h1>

            <Link to='/mapsPage'>
              <button type='button' class='btn btn-primary'>
                Find Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='appointments-div'>
        <div className='overlay'>
          <div className='overlay-display'>
            <h1>
              Connect with experts. Book an appointment with a professional now.
            </h1>

            <Link
              to={{
                pathname: '/bookAppointment',
                state: { email: 'testemail' },
              }}
            >
              <button type='button' class='btn btn-primary'>
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='meds-div'>
        <div className='overlay'>
          <div className='overlay-display'>
            <h1> Visit our online store for everything good for your pet!</h1>
            <Link to='/medStore'>
              <button type='button' class='btn btn-primary'>
                View Store{' '}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
