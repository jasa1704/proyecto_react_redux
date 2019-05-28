import React, { Component } from "react";
import { connect } from "react-redux";
import { eliminarProducto } from "../actions/productosActions";

class Producto extends Component {

  eliminarP = () => {
    this.props.eliminarProducto(this.props.producto.id);
  };

  render() {
    const { producto } = this.props;
    return (
      <li>
        <p>{producto.nombre}</p>
        <button onClick={this.guardarCambios} className="btn btn-info">
            Editar
        </button>
        <button onClick={this.eliminarP} className="btn btn-danger">
            Eliminar
        </button>
      </li>
    );
  }
}

export default connect(
  null,
  { eliminarProducto }
) (Producto);