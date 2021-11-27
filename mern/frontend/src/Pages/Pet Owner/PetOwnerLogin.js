import React from 'react'
import SignUpNavbar from '../Pet Owner/SignUpNavbar'
import  { Component } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";

export default class PetOwnerLogin extends Component {


    constructor(props) {
        super(props)
    
        this.state = {

            email:"",
            password:"",
            forwardtoLogin:false
        }
    }
    

 handleOnclick = (e)=>
 {   e.preventDefault()
     console.log(this.state)
     console.log("hii")

     axios.post("http://localhost:3030/Pet/pLogin",
     {
      Email:this.state.email,
      password:this.state.password
     }
     ).then(res=>{
         console.log(res)
         this.setState(
             {
                forwardtoLogin:true 
             }
             )
     
        }).catch(err=>{
            console.log(err)
            alert("Invalid Password")
        })
     
 }


 handleEmailOnchange = (e)=>
 {

  this.setState(
      {
          email:e.target.value
      })

 }
  
handlePasswordChange = (e) =>
{
  
    this.setState(
        {
            password:e.target.value
        })



}



    render() {
        if(this.state.forwardtoLogin == false)
        {
        
        return (
            <div>
                <SignUpNavbar></SignUpNavbar>
            <div className="container-fluid">
                <div className="row" style={{justifyContent:"center"}}>
                  
                     <div className="col-md-3">
                    <h5> Pet Owner Login</h5>
                    </div>                
                </div>
                <div className="row" style={{textAlign:"left" ,marginTop:"3%"}} >
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={this.handleOnclick} >
                            <div className="form-group">
                                <label for="petownerEmail">Email address</label>
                                <input onChange={(e)=>{this.handleEmailOnchange(e)}} type="email" className="form-control" id="petownerEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                                
                            </div>
                            <div className="form-group">
                                <label for="password" >Password</label>
                                <input onChange={(e)=>{this.handlePasswordChange(e)}} type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                    <div className="col-md-3">
                    </div>

                </div>
            </div> 
                
            </div>
        )
    }
    else
    {
        return <Redirect to = "/" ></Redirect>  
    }

    }
}

// const PetOwnerLogin = () => {





//     return (
//         <div>
            
//         </div>
//     )
// }

// export default PetOwnerLogin


















