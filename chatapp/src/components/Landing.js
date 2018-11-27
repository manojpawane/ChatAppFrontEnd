import React, {Component} from 'react'

//// Landing page is showing welcome on home page
class Landing extends Component{
    render(){
        return (
            <div className="container">
               <div className="jumbotron mt-5">
                   <div className="col-sm-8 mx-auto"><h1 align="center">Welcome</h1></div>
                </div>
            </div>
        )
    }
}

export default Landing