import React, { Component } from 'react';
import './login-page.css'

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        // console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value,
        })
        // console.log(this.state.username)
        // console.log(this.state.password)
    }

    login = (e) => {
        // e.preventDefault();
        // localStorage.clear();
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
    }


    render() {
        console.log(this.state.username);
        console.log(this.state.password);
        return(
            <div className='login-container'>
                <h1>
                    Login
                </h1>
                <form>
                    <input 
                    
                    placeholder="Username" 
                    name ="username" 
                    value={this.username} 
                    onChange={this.handleChange}>
                    </input>
                    <input 
                    placeholder="Password" 
                    name ="password" 
                    value={this.password}
                    onChange={this.handleChange}>
                    </input>
                    <button onClick={() => this.login()}>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginPage;