import React, { Component } from 'react';
import './App.css';
import { DISHES } from './component/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './component/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Sign from './component/Sign';
import NavbarNew from './component/NavbarNew';
import Job from './component/jobs';


/*class App extends Component {
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
*/

function App() {
  return (

      <main>
        <NavbarNew>Kitchen</NavbarNew>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/About" component={About} />
              <Route path="/Login" component={Login} />
              <Route path="/Sign" component={Sign} />
              <Route path="/Job" component={Job} />
          </Switch>
      </main>
  )
}


export default App;
