import React, { Component } from 'react'
import {  singleChatD } from '../actions/ChatFunction'
import jwt_decode from 'jwt-decode'

class singleChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            name: '', answer: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ message: e.target.value });
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);
        this.setState({
            name: decoded.name
        })
    }
    onSubmit(e) {
        e.preventDefault()

        const sendMessage = {
            name: this.state.name,
            message: this.state.message
        }

        singleChatD(sendMessage).then(res => {
            if (res) {
                this.state.answer = res;
            }
        })
    }
    render() {
        const message = this.state.message;
        return (
            <div className="container">
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="jumbotr on mt-5">
                        <legend>Enter your question.</legend>
                        <input value={message} onChange={this.handleChange} />
                        <p>{this.state.answer}</p>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Send
                </button>
                </form>
            </div>
        )
    }
}

export default singleChat