import React from 'react';

const VetTopNav = () => {
  return (
    <nav
      class='navbar navbar-expand-lg '
      style={{
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
      }}
    >
      <a class='navbar-brand' href='/VetLanding' style={{ color: 'white' }}>
        {' '}
        Pet Practo
      </a>

      <div class='collapse navbar-collapse' id='navbarTogglerDemo03'>
        <ul class='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li class='nav-item active'>
            <a class='nav-link' href='/vetHome'>
              Profile <span class='sr-only'>(current)</span>
            </a>
          </li>

          <li class='nav-item'>
            <a class='nav-link' href='/bookAppointment'>
              My Appointments
            </a>
          </li>
        </ul>
        <div style={{ display: 'flex' }}>
          {/* <a class="nav-link" href="/petOwnerProfile">Profile <span class="sr-only">(current)</span></a> */}

          <button
            class='btn btn-outline-success my-2 my-sm-0'
            type='button'
            onClick={() => (window.location = '/vetLogin')}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default VetTopNav;
