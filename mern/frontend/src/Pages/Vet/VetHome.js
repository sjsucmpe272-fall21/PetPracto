import React from 'react'
import { NavLink } from 'react-router-dom'
import TopNavBar from '../Pet Owner/TopNavBar'
import VetTopNav from './VetTopNav'

const VetHome = () => {
    return (
        <div>
            <VetTopNav />
            <div style={{ textAlign: "left", padding: "50px" }}>
                <h1><i>Profile Details</i></h1>
                <p><b>Name</b></p>
                <p><b>Email</b></p>
                <p><b>Gender</b></p>
                <p><b>Age</b></p>
                <p><b>Location</b></p>
                <p><b>Expertise</b></p>

                <div style={{ backgroundColor: "" }}>
                    <NavLink style={{ fontSize: "24px" }} to="/vetAppointments"> View Past Appointments</NavLink>
                </div>

            </div >
        </div>
    )
}

export default VetHome
