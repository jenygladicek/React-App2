import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from "./../components/Logo"
import NavMenu from "./../components/NavMenu";
import NavItem from "./../components/NavItem";
import "./../styles/style.css";
class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newItem:props.newItem,
            count : 0
        }
    }
    componentDidMount(){
        console.log(this.state.newItem);
    }
    increment = () =>{
        this.setState({
            count : this.state.count + 1
        });
    }
    decrement = () => {
        this.setState({
            count : this.state.count - 1
        });
    }
    render() {
        return(
        <div>           
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <Logo/>
                <NavMenu>
                    <NavItem path="/list">List of Items</NavItem>
                    <NavItem path="/singleItem">Add New Item</NavItem>
                </NavMenu>
            </div>
        </nav> 
        <div>Description page{this.props.match.params.name}</div>
        <div>
            Counter Sample
        <button className="button" onClick={this.increment}>+</button>
        <span>{this.state.count}</span>
        <button className="button" onClick={this.decrement}>-</button>
        </div>
    </div>
          
        )
    }
}

const mapStateToProps = state => ({
 newItem : state
});



export default connect(mapStateToProps)(Description);
