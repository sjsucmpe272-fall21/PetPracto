import React from 'react';
import SignUpNavbar from '../Pet Owner/SignUpNavbar';
import axios from 'axios';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

import { Component } from 'react';

export default class VetLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
  }

  handleOnclick = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log('hii');

    axios
      .post('http://localhost:3030/Vet/vLogin', {
        Email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          redirect: true,
        });
      })
      .catch((err) => {
        console.log(err);
        alert('Invalid Password');
      });
  };

  handleEmailOnchange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    if (this.state.redirect != true) {
      return (
        <div>
          <div>
            <SignUpNavbar></SignUpNavbar>
            <div className='container-fluid'>
              <div className='row' style={{ justifyContent: 'center' }}>
                <div className='col-md-3'>
                  <h5> Vet Login</h5>
                </div>
              </div>
              <div
                className='row'
                style={{ textAlign: 'left', marginTop: '3%' }}
              >
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                  <form onSubmit={this.handleOnclick}>
                    <div class='form-group'>
                      <label for='vetOwnerLogin'>Email address</label>
                      <input
                        type='email'
                        onChange={(e) => {
                          this.handleEmailOnchange(e);
                        }}
                        class='form-control'
                        id='vetOwnerLogin'
                        aria-describedby='emailHelp'
                        placeholder='Enter email'
                      />
                    </div>
                    <div class='form-group'>
                      <label for='password'>Password</label>
                      <input
                        type='password'
                        class='form-control'
                        id='password'
                        placeholder='Password'
                        onChange={(e) => {
                          this.handlePasswordChange(e);
                        }}
                      />
                    </div>

                    <button type='submit' class='btn btn-primary'>
                      Submit
                    </button>
                  </form>
                </div>
                <div className='col-md-3'></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to='/VetLanding'></Redirect>;
    }
  }
}

// const VetLogin = () => {
//     return (

//     )
// }

// export default VetLogin
