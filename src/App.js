import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import Productos from "./components/Productos";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoRuta from "./components/NoRuta";
import NuevoProducto from "./components/NuevoProducto";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
        <h1><strong>Bienvenidos a la clase de Redux</strong></h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route component={NoRuta} />
          </Switch>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;