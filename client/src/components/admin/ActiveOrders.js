import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/ordersActions';

class ActiveOrders extends React.Component {
    render() {
        const orders = this.props.orders.map((order, i) => {
            const items = order.orders.map((item, i) =><li key={i}>{item.name} {item.count}x</li>)
            
            return (
                <div className="new-order">
                    <h3>{order.firstname}</h3>
                    <h3>{order.lastname}</h3>
                    <h3>{order.address}</h3>
                    <ul>
                    {items}
                    </ul>
                </div>
            )
        });
        return (
            <div className="Active-Orders">
                <h1>active orders</h1>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.activeOrders,
    }
};

export default connect(mapStateToProps, actions)(ActiveOrders)