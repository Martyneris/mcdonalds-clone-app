import React from 'react';
import Home from './Home';
import Menu from './Menu';
import ActiveOrders from './ActiveOrders';
import Nav from './Nav';
import {Route} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import {connect} from 'react-redux';
import * as authActions from '../../actions/authActions';
import * as ordersActions from '../../actions/ordersActions';
import axios from 'axios';
import io from 'socket.io-client';

class Admin extends React.Component {
    constructor(props){
        super(props)
        this.socket = io('http://localhost:'+process.env.PORT)
    };
    componentDidMount(){
        this.socket.on('neworder', (order)=>{
           console.log(order);
           this.props.newOrder(order)
        })
    };
    componentWillMount(){
    // daroma uzklausa i local storage, gauti tokeno
    let token = localStorage.getItem('jwt-token');
    if(!token) return this.props.history.push('/login');

    // irasomas token i axios headers
    axios.defaults.headers.common['Authorization']= token;

    token = token.split(' ')[1];
    console.log(token);
    
    // is tokeno istraukiama user info
    const user = jwt.decode(token);
    if (!user) return this.props.history.push('/login');
    // iskvieciami actions (set user) kuris uzpildo state.auth
    this.props.setUser(user);
    }
    render() {
        return (
            <div className="Admin">
                <Nav/>
                <Route exact path="/admin/" component={Home}/>
                <Route exact path="/admin/orders" component={ActiveOrders}/>
                <Route exact path="/admin/menu/" component={Menu}/>
                <Route path="/admin/menu/:category" component={Menu}/>
            </div>
        )
    }
}

export default connect(null, {...authActions,...ordersActions})(Admin)

