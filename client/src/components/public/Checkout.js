import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';


class Checkout extends React.Component {

    state={
      firstname:'',
      lastname:'',
      phone:'',
      address:'',
      errors:{},
      complete: false,

    };

    handleInput=(e)=>{
     this.setState({[e.target.name]:e.target.value})
    }

    completeOrder = async(e)=>{
      e.preventDefault();
      try{
          const res = await axios.post('/api/orders', { ...this.state, orders: this.props.orders });
          this.setState({complete:res.data.message});
          setTimeout(() => {
              this.props.history.push('/')
          },2000);
      }catch(err){
          console.log(err.response.data);
          this.setState({errors:err.response.data})
      }
    }

    render() {

        if(this.state.complete){
            return(
                <div className="Checkout">
                <h1>{this.state.complete}</h1>
                </div>
            )
        }
        
        return (
            <div className="Checkout">
                <h1>Checkout</h1>
                <Link to='/shop'>&#60;&#60;back</Link>
                <form onSubmit={this.completeOrder}>
                    <input 
                        onChange={this.handleInput}
                        value={this.state.firstname}
                        name="firstname"
                        placeholder="First name"
                        type="text"/>
                    <input
                        onChange={this.handleInput}
                        value={this.state.lastname}
                        name="lastname"
                        placeholder="Last name"
                        type="text" />
                    <input
                        onChange={this.handleInput}
                        value={this.state.phone}
                        name="phone"
                        placeholder="Phone"
                        type="text" />
                    {this.state.errors.phone && <span>{this.state.errors.phone}</span>}
                    <input
                        onChange={this.handleInput}
                        value={this.state.address}
                        name="address"
                        placeholder="Address"
                        type="text" />
                    <button>Complete order</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        orders:state.orders,
    }
}

export default connect(mapStateToProps)(Checkout)