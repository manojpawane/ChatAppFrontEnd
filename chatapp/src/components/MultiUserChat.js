import React, { Component } from 'react'
import { MultiChatD, ReceiveChat } from '../actions/ChatFunction'
import jwt_decode from 'jwt-decode'
 import equal from 'fast-deep-equal'

class MultiUserChat extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            receiverEmail: '',
            senderId: '', answer: '', receive: 'No messages', username:'no user'
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);
         this.setState({
            senderId: decoded._id,
            username:decoded.email
        })
        this.tick(decoded._id)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const sendMessage = {
            senderId: this.state.senderId,
            receiverEmail: this.state.receiverEmail,
            message: this.state.message
        }
        MultiChatD(sendMessage).then(res => {
            if (res) {
                this.setState({ answer: res });
            }
        })
    }

     componentDidUpdate(prevState) {
        if(!equal(this.state.receive, prevState.receive))
        {
               this.tick(this.state.senderId);
        }
    } 

    tick(decoded_id) {
        try {
            const sendMes = {
                senderId: decoded_id
            }
            ReceiveChat(sendMes).then(res => {
                console.log(this.state.senderId);
                if (res) {
                    this.setState({ receive: res });
                }
                else{
                    this.setState({receive:'no new message'})
                }
            })
        } catch (error) {
            throw error
        }
    }

    render() {
        return (
            <div className="container">
            <div className="row"><h3>Hello, {this.state.username}</h3></div>
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="receiverEmail">Send to:</label>
                                <input type="text"
                                    className="form-control"
                                    name="receiverEmail"
                                    placeholder="Send to"
                                    value={this.setState.receiverEmail}
                                    onChange={this.onChange} />
                                <h6>{this.state.answer}</h6>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <input type="text"
                                    className="form-control"
                                    name="message"
                                    placeholder="Type message here"
                                    value={this.setState.message}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send
                            </button>
                        </form>

                    </div>

                </div>
                <div className="row">
                    <div className="container">
                        <div className="jumbotron mt-5">
                            <h5>latest message received</h5>
                            <p>{this.state.receive}</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MultiUserChat