import React from 'react';
import Menu from './Menu';
import Orders from './Orders';
import * as menuActions from '../../actions/menuActions';
import * as ordersActions from '../../actions/ordersActions';
import {Link} from 'react-router-dom';
import { connect} from 'react-redux';

class Shop extends React.Component{

    state={
        updated:false
    };

    updatePrice=()=>{
        this.setState({updated:true})
        setTimeout(() => {
            this.setState({ updated: false })
        },250);
    }

    componentDidMount(){
        this.props.fetchMenu()
    }

    render(){
    const total = this.props.orders.reduce((all,order)=>{
       return all+order.price*order.count
    },0);
    const {category} = this.props.match.params;
    const items = this.props.menu.filter((item)=>{
        if(!category) return item
        return category===item.category
    }).map((item,i)=>{
       return(
           <div
           onClick={()=>{
                   this.props.addOrder(item);
                   this.updatePrice()
           }}
           key={i}
           className="item">
           <img src={item.img} alt={item.name}/>
           <h3>{item.name}</h3>
           <strong>{item.price}</strong>

           </div>
       )
    });

        return(
            <div className="Shop">
                {this.props.orders.length>0 && 
                <Link to="/checkout" className={this.state.updated? "checkout animate":"checkout"}>
                checkout
                <span>{total}€</span>
                </Link>}
                <Menu/>
                <h1>{category}</h1>
                <div className="menu-items">
                 {items}
                </div>
                <Orders updatePrice={this.updatePrice}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu:state.menu,
        orders:state.orders
    }
}

export default connect (mapStateToProps,{...menuActions,...ordersActions})(Shop)