import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VetTopNav from './VetTopNav';

const VetAppointments = () => {

  const [appointments, setAppointments] = useState()
  const getVetAppointmentList = async () => {
    const res = await axios.get(`http://localhost:3030/Vet/vetAppointments/61a403f63dc19fc6094d71af`)
    console.log("appointments", res)
    setAppointments(res.data)
  }
  useEffect(() => {
    getVetAppointmentList();
  }, [])
  return (
    <div>
      <VetTopNav />
      <div className="container" style={{ textAlign: "left", padding: "50px", fontWeight: "600" }}>
        <h1><b> My Appointments</b></h1>
        <br />
        <hr />

        {appointments?.map(apt => {

          return (<div style={{ margin: "10px auto" }}>
            <div class="card w-100">
              <div class="card-body" style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h5 class="card-title">#{apt.AppointmentNumber} : {apt.I_summary}</h5>
                  <p class="card-text">{apt.I_desc}</p>
                </div>
                <div>
                  <h5 class="card-text">Date: {apt.Date}</h5>
                  <p class="card-title">Time: {apt.Time}</p>
                </div>
              </div>
            </div>

          </div>)
        })
        }

      </div>
    </div>
  );
};

export default VetAppointments;
