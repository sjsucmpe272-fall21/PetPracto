import React from 'react'

const TopNavBar = () => {

    return (
        <div>

            <a class="navbar-brand" href="/" style={{ color: "white" }}> Pet Practo</a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0" >
                    <li class="nav-item active" >
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/mapsPage">People around you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/bookAppointment">Schedule Appointment</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/medStore">Buy Medicines</a>
                    </li>
                </ul>
                <div style={{ display: "flex" }}>

                    <a class="nav-link" href="/petOwnerProfile">Profile <span class="sr-only">(current)</span></a>

                    <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => window.location = "/petOwnerSignIn"}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default TopNavBar
