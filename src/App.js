import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import GroceryShelf from './containers/GroceryShelf/GroceryShelf';
import Cart from './containers/Cart/Cart';
import Orders from './containers/Orders/Orders';




class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={GroceryShelf} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
