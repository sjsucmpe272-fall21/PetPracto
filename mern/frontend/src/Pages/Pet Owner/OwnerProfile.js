import React from 'react'
import { NavLink } from 'react-router-dom'
import TopNavBar from './TopNavBar'

const OwnerProfile = () => {
    return (
        <div>
            <TopNavBar />
            <div style={{ textAlign: "left", padding: "50px" }}>
                <h1><i>Profile Details</i></h1>
                <p><b>Name</b></p>
                <p><b>Email</b></p>
                <p><b>Gender</b></p>
                <p><b>Age</b></p>
                <p><b>Location</b></p>
                <div style={{ width: "200px", height: "200px", objectFit: "contain" }}>
                    <img style={{ width: "200px", height: "200px", objectFit: "contain" }} src="https://townofbeekmantown.com/wp-content/uploads/2019/06/2-dog.jpg" alt="" />

                </div>

                <p>Pet Animal : Dog</p>
                <p>Pet Name : Kutta</p>

                <p>Pet Breed: </p>
                <p>Pet Age: </p>
            </div>
            <div style={{ backgroundColor: "" }}>
                <NavLink style={{ fontSize: "24px" }} to="/ownerPastAppointments"> View Past Appointments</NavLink>
            </div>

        </div >
    )
}

export default OwnerProfile
