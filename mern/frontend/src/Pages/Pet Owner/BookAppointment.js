import React from 'react'
import TopNavBar from './TopNavBar'

const BookAppointment = () => {

    let doctors = ["Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff",
        "Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff"];


    return (
        <div>
            <TopNavBar />
            <div className="book-appointment-form">

                <form>
                    <h1> Schedule an appointment</h1>
                    {/* <div class="form-group">
                        <label for="petAnimal">Pet</label>
                        <input type="text" class="form-control" id="petAnimal" placeholder="Pet Animal" />
                    </div>
                    <div class="form-group">
                        <label for="petBreed">Pet Breed</label>
                        <input type="text" class="form-control" id="petBreed" placeholder="Pet Breed" />
                    </div> */}
                    <div class="form-group">
                        <label for="issueSummary">Issue Summary</label>
                        <input type="text" class="form-control" id="issueSummary" placeholder="Issue Summary" />
                    </div>
                    <div class="form-group">
                        <label for="issueDescription">Issue Description</label>
                        <textarea type="text" class="form-control" id="issueDescription" placeholder="Issue Description" />
                    </div>
                    <div class="form-group">
                        <label for="doctor"> Doctor </label>
                        <select> Select Doctor
                            {doctors.map(doctor => {
                                return (<option>{doctor}</option>)
                            })}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="date">Choose Date </label>
                        <input style={{ marginLeft: "10px" }} type="date" />
                    </div>
                    <div class="form-group">
                        <label className="style" for="time"> Choose Time </label>
                        <input style={{ marginLeft: "10px" }} type="time" />
                    </div>
                    <button type="submit" class="btn btn-primary"> Book Appointment </button>
                </form>
            </div>
        </div>
    )
}

export default BookAppointment
