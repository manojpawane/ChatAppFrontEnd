import React, { Component } from 'react'
import Login from '../components/Login'
import {Link} from "react-router-dom"

//// Landing page is showing welcome on home page
class Dashboard extends Component {
    render() {

        const userLogin = (
            <div className="col-sm-8 mx-auto"> 
            <Link to="singleChat"><button align="center" className="btn btn-primary">Assistant
            </button></Link>
                
                            
            <Link to="singleChat"><button align="center" className="btn btn-success">Multiuser
            </button></Link>
                <h1> Select Assistant for static chat and Multiuser to chat with your friend</h1>
            </div>
        )

        return (
            <div className="container">
                <div className="jumbotron mt-5">
                {localStorage.usertoken ? userLogin : <Login/>}
                </div>
            </div>
        )
    }
}

export default Dashboard