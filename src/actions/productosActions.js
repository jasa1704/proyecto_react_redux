    
import { MOSTRAR_PRODUCTOS, GUARDAR_PRODUCTO, ELIMINAR_PRODUCTO, EDITAR_PRODUCTO } from "./types";

//axios
import axios from "axios";

//

export const mostrarProductos = () => async dispatch => {
  const respuesta = await axios.get("https://my-json-server.typicode.com/jasa1704/react_app_netlify/productos/");
  console.log(respuesta);

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
  //return { type: MOSTRAR_PRODUCTOS };
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
  //return { type: MOSTRAR_PRODUCTOS };
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
  //return { type: MOSTRAR_PRODUCTOS };
};

export const editarProducto = id => async (dispatch,getState) => {
  debugger
  // let productos = [...getState().productos.productos];
  // const index = productos.map(producto => producto.id).indexOf(id);

  let respuesta = await axios.put(
    "https://my-json-server.typicode.com/jasa1704/react_app_netlify/productos/"+ id, producto
  );

  console.log(respuesta);
  dispatch({
    type: EDITAR_PRODUCTO,
    payload: index
  });
  //return { type: MOSTRAR_PRODUCTOS };
};