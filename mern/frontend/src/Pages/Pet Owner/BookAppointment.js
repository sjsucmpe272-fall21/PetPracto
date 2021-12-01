import React, { useEffect, useState } from 'react'
import TopNavBar from './TopNavBar'
import axios from 'axios'

const BookAppointment = () => {
    const [vets, setVets] = useState([])
    const [issue, setIssue] = useState()
    const [description, setDescription] = useState()
    const [time, setTime] = useState()
    const [date, setDate] = useState()
    const [doctor, setDoctor] = useState()

    const onBookAppointment = async () => {
        const payload = {
            issue,
            description,
            time,
            date,
            doctor,
        }
        const response = await axios.post('http://localhost:3030/Pet/BookAppointment', payload)
        console.log("repsonse", response)
    }

    const getVetDetails = async () => {
        const res = await axios.get(`http://localhost:3030/Vet/vetDetails`)
        console.log("Vet Details", res)
        setVets(res.data)
    }

    const handleIssueOnchange = (e) => {
        console.log(e.target.value);
        setIssue(e.target.value)
    };

    const handledescriptionOnchange = (e) => {
        console.log(e.target.value);
        setDescription(e.target.value)
    };

    const handledoctorOnchange = (e) => {
        console.log(e.target);
        setDoctor(e.target.value)

    };

    const handledateOnchange = (e) => {
        console.log(e.target.value);
        setDate(e.target.value)

    };

    const handletimeOnchange = (e) => {
        console.log(e.target.value);
        setTime(e.target.value)

    };


    useEffect(() => {
        getVetDetails()
    }, [])

    return (
        <div>
            <div>
                <TopNavBar />
                <div className="book-appointment-form">

                    <form>
                        <h1> Schedule an appointment</h1>

                        <div class="form-group">
                            <label for="issueSummary">Issue Summary</label>
                            <input type="text" class="form-control" id="issueSummary" placeholder="Issue Summary" onChange={(e) => { handleIssueOnchange(e) }} />
                        </div>
                        <div class="form-group">
                            <label for="issueDescription">Issue Description</label>
                            <textarea type="text" class="form-control" id="issueDescription" placeholder="Issue Description" onChange={(e) => {
                                handledescriptionOnchange(e);
                            }} />
                        </div>
                        <div class="form-group">
                            <label for="doctor"> Doctor </label>
                            <select
                                onChange={(e) => {
                                    handledoctorOnchange(e);
                                }}
                                name="doctor"
                            > Select Doctor
                                {vets?.map(vet => {
                                    return <option value={vet.VetName}>{vet.VetName}</option>;
                                })
                                }
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="date">Choose Date </label>
                            <input onChange={(e) => {
                                handledateOnchange(e);
                            }} style={{ marginLeft: "10px" }} type="date" min="2021-12-02" />
                        </div>
                        <div class="form-group">
                            <label className="style" for="time"> Choose Time </label>
                            <input onChange={(e) => {
                                handletimeOnchange(e);
                            }} type="time" required step="3600" min="09:00" max="18:00" />
                        </div>
                        <button onClick={onBookAppointment} type="submit" class="btn btn-primary"> Book Appointment </button>
                    </form>
                </div>
            </div>
        </div>
    );

}
export default BookAppointment
// const BookAppointment = () => {

//     let doctors = ["Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff",
//         "Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff", "Dr. S. Maximoff"];

//     return (
//         <div>
//             <TopNavBar />
//             <div className="book-appointment-form">

//                 <form>
//                     <h1> Schedule an appointment</h1>

//                     <div class="form-group">
//                         <label for="issueSummary">Issue Summary</label>
//                         <input type="text" class="form-control" id="issueSummary" placeholder="Issue Summary" />
//                     </div>
//                     <div class="form-group">
//                         <label for="issueDescription">Issue Description</label>
//                         <textarea type="text" class="form-control" id="issueDescription" placeholder="Issue Description" />
//                     </div>
//                     <div class="form-group">
//                         <label for="doctor"> Doctor </label>
//                         <select> Select Doctor
//                             {doctors.map(doctor => {
//                                 return (<option>{doctor}</option>)
//                             })}
//                         </select>
//                     </div>
//                     <div class="form-group">
//                         <label for="date">Choose Date </label>
//                         <input style={{ marginLeft: "10px" }} type="date" />
//                     </div>
//                     <div class="form-group">
//                         <label className="style" for="time"> Choose Time </label>
//                         <input style={{ marginLeft: "10px" }} type="time" />
//                     </div>
//                     <button type="submit" class="btn btn-primary"> Book Appointment </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default BookAppointment
