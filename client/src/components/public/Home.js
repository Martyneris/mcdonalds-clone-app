import React from 'react';
import img from '../../assets/images/main.png';


class Home extends React.Component {

state = {
    animate:false,
};

redirect = ()=>{
    //redirect from Home to Shop
    setTimeout(()=>{
        this.props.history.push('/shop')
    }, 1500)
    this.setState({animate:true})
}

render() {

    const topStyle = {
            left:'100%'
        };

    const bottomStyle = {
            left: '-100%'
        };

    const imgStyle = {
            opacity:0,
            transition:'1s'
        }

    const {animate} = this.state;

        return (
            <div
            onClick={this.redirect}
            className="Home">
            <div 
            style={animate ? topStyle:null}
            className="top-line"></div>
            <img 
            style={animate? imgStyle:null}
            src={img} alt=""/>
            <div 
            style={animate ? bottomStyle:null}
            className="bottom-line"></div>
            </div>
        )
    }
}

export default Home