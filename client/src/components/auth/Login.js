import React from 'react';
import * as actions from '../../actions/authActions';
import { connect } from 'react-redux';

class Login extends React.Component {

    state = {
       name:'',
       password:'',
    };

    onInputChange = (e) => this.setState({[e.target.name]:e.target.value});

    onFormSubmit = (e)=>{
        e.preventDefault();
        // uzklausa i backend --> /api/login
        console.log(this.state);
        this.props.login(this.state, this.props.history)
        // this.props.history.push('/admin')
    }

    render(){
    return(
        <div className="Login">
        <h1> Login</h1>
        <form onSubmit={this.onFormSubmit}>
            <input 
            onChange={this.onInputChange}
            value={this.state.name}
            name="name"
            placeholder="username"
            type="text"/>
            <input 
            onChange={this.onInputChange}
            value={this.state.password}
            name="password"
            placeholder="password"
            type="password"/>
            <button>login</button>
            {this.props.errors.message &&
            <span>{this.props.errors.message}</span>}
        </form>
        </div>
    )
 }
}

const mapStateToProps = (state)=>{
    return{
        errors:state.errors
    }
}

export default connect(mapStateToProps, actions)(Login)