import { MOSTRAR_PRODUCTOS, GUARDAR_PRODUCTO, ELIMINAR_PRODUCTO, EDITAR_PRODUCTO, ACTUALIZAR_PRODUCTO } from "../actions/types";

const estadoInicial = {
  productos: [],
  editarProducto: []
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
    case ACTUALIZAR_PRODUCTO:
        return { ...state, editarProducto: action.payload };
        break;
    case EDITAR_PRODUCTO:
          return { ...state, productos: state.productos.map((item)=>{

              if (item.id === action.payload.id) {
                  item = action.payload; 
                }
              return item;
          })};
      break;    
    default:
      return state;
      break;
  }
}