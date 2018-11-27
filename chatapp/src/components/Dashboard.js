import React, { Component } from 'react'
import Login from '../components/Login'
import SingleChat from '../components/singleChat'

//// Landing page is showing welcome on home page
class Dashboard extends Component {
    render() {

        const userLogin = (
            <div className="col-sm-8 mx-auto"> <button align="center" onClick={<SingleChat/>} className="btn btn-primary">
                Assistant
                            </button>
                <button align="center" onClick={multiuserChat} className="btn btn-success">
                    MultiUser
                            </button>
                <h1> Select Assistant for static chat and Multiuser to chat with your freind</h1>
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


function multiuserChat(){
    
        return (<singleChat/>)
}
export default Dashboard