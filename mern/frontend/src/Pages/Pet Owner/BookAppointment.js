import React from 'react'
import TopNavBar from './TopNavBar'

const BookAppointment = () => {
    return (
        <div>
            <TopNavBar />
            <div className="book-appointment-form">

                <form>
                    <h1> Schedule an appointment</h1>
                    <div class="form-group">
                        <label for="issueSummary">Issue Summary</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Issue Summary" />
                    </div>
                    <div class="form-group">
                        <label for="issueDescription">Issue Description</label>
                        <textarea type="text" class="form-control" id="inputAddress2" placeholder="Issue Description" />
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
