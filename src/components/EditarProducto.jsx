import React, { Component } from "react";
import { connect } from "react-redux";
import { editarProducto } from "../actions/productosActions";

class EditarProducto extends Component {

  state = { id: 0, nombre: "", precio: 0 };

  componentDidMount(){
    this.setState({ id: 0, nombre: this.props.producto.nombre, precio: this.props.producto.precio });
  }

  changeInput = e => {
    console.log(e.target.value);

    this.setState({ [e.target.name]: e.target.value });
  };

  editarCambios = () => {
    //Guardar el producto
    console.log("editar el producto");
    this.props.editarProducto(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
        <h2>Editar Producto</h2>
        <div>
          <label htmlFor="">Nombre</label>
          <input onChange={this.changeInput} name="nombre" type="text" value={this.state.nombre} />
        </div>
        <div>
          <label htmlFor="">Precio</label>
          <input onChange={this.changeInput} name="precio" type="text" value={this.state.precio} />
        </div>
        <div>
          <button onClick={this.editarCambios} className="btn btn-success">
            Actualizar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    producto: state.productos.editarProducto
  };
};

export default connect(
  mapStateToProp,
  { editarProducto }
)(EditarProducto);