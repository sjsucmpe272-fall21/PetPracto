import React from 'react';
import TopNavBar from './TopNavBar';
import axios from 'axios';
import { Component } from 'react';

let doctors = [
  'Dr. S. Maximoff',
  'Dr. S. Maximoff',
  'Dr. S. Maximoff',
  'Dr. S. Maximoff',
  'Dr. S. Maximoff',
  'Dr. S. Maximoff',
  'Dr. S. Maximoff',
  'Dr. S. Maximoff',
  'Dr. S. Maximoff',
];

export default class BookAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: '',
      description: '',
      doctor: '',
      date: '',
      time: '',
      email: 'testemail',
    };
  }
  // this.props.location.state.email,
  handleIssueOnchange = (e) => {
    console.log(e.target.value);
    this.setState({
      issue: e.target.value,
    });
  };

  handledescriptionOnchange = (e) => {
    console.log(e.target.value);
    this.setState({
      description: e.target.value,
    });
  };

  handledoctorOnchange = (e) => {
    console.log(e.target.value);
    this.setState({
      doctor: e.target.value,
    });
  };

  handledateOnchange = (e) => {
    console.log(e.target.value);
    this.setState({
      date: e.target.value,
    });
  };

  handletimeOnchange = (e) => {
    console.log(e.target.value);
    this.setState({
      time: e.target.value,
    });
  };

  formsubmit = (e) => {
    // e.preventDefault();
    console.log(this.state);
    console.log('asdasd');
    axios
      .post('http://localhost:3030/Pet/BookAppointment', {
        issue: this.state.issue,
        description: this.state.description,
        time1: this.state.time,
        date: this.state.date,
        doctor: this.state.doctor,
        email: this.state.email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div>
          <TopNavBar />
          <div className='book-appointment-form'>
            <form>
              <h1> Schedule an appointment</h1>
              <div class='form-group'>
                <label for='issueSummary'>Issue Summary</label>
                <input
                  type='text'
                  name='issue'
                  onChange={(e) => {
                    this.handleIssueOnchange(e);
                  }}
                  class='form-control'
                  id='issueSummary'
                  placeholder='Issue Summary'
                />
              </div>
              <div class='form-group'>
                <label for='issueDescription'>Issue Description</label>
                <textarea
                  type='text'
                  onChange={(e) => {
                    this.handledescriptionOnchange(e);
                  }}
                  class='form-control'
                  id='issueDescription'
                  name='description'
                  placeholder='Issue Description'
                />
              </div>
              <div class='form-group'>
                <label for='doctor'> Doctor </label>
                <select
                  name='doctor'
                  onChange={(e) => {
                    this.handledoctorOnchange(e);
                  }}
                >
                  {' '}
                  Select Doctor
                  {doctors.map((doctor) => {
                    return <option>{doctor}</option>;
                  })}
                </select>
              </div>
              <div class='form-group'>
                <label for='date'>Choose Date </label>
                <input
                  style={{ marginLeft: '10px' }}
                  onChange={(e) => {
                    this.handledateOnchange(e);
                  }}
                  type='date'
                  name='date'
                />
              </div>
              <div class='form-group'>
                <label className='style' for='time'>
                  {' '}
                  Choose Time{' '}
                </label>
                <input
                  name='time1'
                  style={{ marginLeft: '10px' }}
                  type='time'
                  onChange={(e) => {
                    this.handletimeOnchange(e);
                  }}
                />
              </div>
              <button
                type='button'
                onClick={this.formsubmit}
                class='btn btn-primary'
              >
                {' '}
                Book Appointment{' '}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

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
