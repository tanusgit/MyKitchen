import React, { Component } from 'react';
import './App.css';
import { DISHES } from './component/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './component/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Mykichen</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }

}


export default App;
