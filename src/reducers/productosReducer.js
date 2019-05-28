import { MOSTRAR_PRODUCTOS, GUARDAR_PRODUCTO, ELIMINAR_PRODUCTO, EDITAR_PRODUCTO } from "../actions/types";

const estadoInicial = {
  productos: []
};
export default function(state = estadoInicial, action) {
  switch (action.type) {
    case MOSTRAR_PRODUCTOS:
      return { ...state, productos: action.payload };
      break;
    case GUARDAR_PRODUCTO:
      return { ...state, productos: [...state.productos, action.payload] };
      break;
    case ELIMINAR_PRODUCTO:
      return { ...state, productos: state.productos.filter((item)=>{
        if(item.id != action.payload){
          return item;
        }
      })};
      break;
    case EDITAR_PRODUCTO:
      debugger
          return { ...state, productos: state.productos.filter((item)=>{
            if(item.id != action.payload){
              return item;
            }
          })};
      break;    
    default:
      return state;
      break;
  }
}