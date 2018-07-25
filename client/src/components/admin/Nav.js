import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/authActions';

const Nav = (props)=>{
    return(
        <nav className="Admin-Nav">
            <NavLink exact activeClassName='active' to='/admin/'> 
              Home
            </NavLink>
            <NavLink activeClassName='active' to='/admin/menu/'> 
              Menu
            </NavLink>
            <NavLink activeClassName='active' to='/admin/orders'> 
              Orders
            </NavLink>
            <Link  to='/'> 
              Shop
            </Link>
        <h2>{props.auth.user.name}</h2>
        <Link 
        onClick={props.logout}
        to="/login">Logout</Link>
        </nav>
    )
};

// nedestrukturizuota versija
// const mapStateToProps=(state)=>{
//   return({
//     auth:state.auth
//   })
// }

const mapStateToProps=({auth})=>({auth})

export default connect(mapStateToProps, actions, null, { pure: false})(Nav)