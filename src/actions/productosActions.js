    
import { MOSTRAR_PRODUCTOS, GUARDAR_PRODUCTO, ELIMINAR_PRODUCTO, EDITAR_PRODUCTO, ACTUALIZAR_PRODUCTO } from "./types";

//axios
import axios from "axios";

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get("https://my-json-server.typicode.com/jasa1704/react_app_netlify/productos/");
  console.log(respuesta);

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
};

export const guardarProducto = producto => async dispatch => {
  const respuesta = await axios.post(
    "https://my-json-server.typicode.com/jasa1704/react_app_netlify/productos/",
    producto
  );
  console.log(respuesta);

  dispatch({
    type: GUARDAR_PRODUCTO,
    payload: respuesta.data
  });
};

export const eliminarProducto = id => async (dispatch,getState) => {
  let productos = [...getState().productos.productos];
  const index = productos.map(producto => producto.id).indexOf(id);

  let respuesta = await axios.delete(
    "https://my-json-server.typicode.com/jasa1704/react_app_netlify/productos/"+ id
  );

  console.log(respuesta);
  dispatch({
    type: ELIMINAR_PRODUCTO,
    payload: index
  });
};

export const actualizarProducto = producto => async (dispatch) => {

  dispatch({
    type: ACTUALIZAR_PRODUCTO,
    payload: producto
  });
};

export const editarProducto = producto => async (dispatch) => {

  let respuesta = await axios.put(
    "https://my-json-server.typicode.com/jasa1704/react_app_netlify/productos/"+producto.id, producto
  );

  console.log(respuesta);
  dispatch({
    type: EDITAR_PRODUCTO,
    payload: respuesta.data
  });
};

