import React, { Component } from 'react'
import {  SingleChatD } from '../actions/ChatFunction'
import jwt_decode from 'jwt-decode'

class SingleChat extends Component {
    constructor() {
        super();
        this.state = {
            question: '',
            name: '', answer: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token);
        this.setState({
            name: decoded.email
        })
    }

    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        const sendMessage = {
            name: this.state.name,
            question: this.state.question
        }
        SingleChatD(sendMessage).then(res => {
            if (res) {
                this.setState({answer:res}) ;
            }
        })
    }

    render() {
        return (
            <div className="container">
               <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit} answer = {this.state.answer}>
                            <div className="form-group">
                                <label htmlFor="question">Question</label>
                                <input type="text"
                                    className="form-control"
                                    name="question"
                                    placeholder="Enter question"
                                    value={this.setState.question}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send
                            </button>
                        </form>
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                <p>Response: {this.state.answer}</p></div>
                </div>
            </div>
        )
    }
}

export default SingleChat