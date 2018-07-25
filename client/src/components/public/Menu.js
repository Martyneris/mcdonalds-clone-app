import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/categoriesActions.js';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
    componentDidMount(){
        this.props.fetchCategories(); 
    }
    render() {
console.log(this.props.categories);

const categories = this.props.categories.map((cat,i)=>{
    return(
        <NavLink
        activeClassName='active'
        to={'/shop/'+cat.name} 
        key={i}
        className="category">
            <img src={cat.img}/>
            <h3>{cat.name}</h3>
        </NavLink>
    )
});
        return (
            <div className="Menu">
                {categories}
            </div>
        )
    }
};

const mapStateToProps = (state)=>{
    return{
        categories:state.categories
    }
}

export default connect(mapStateToProps,actions,null,{pure:false})(Menu)