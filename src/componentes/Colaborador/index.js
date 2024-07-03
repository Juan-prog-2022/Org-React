import "./Colaborador.css";
import { TiDelete} from "react-icons/ti";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const Colaborador = (props) => {

    const {nombre, puesto, foto, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    return <div className="colaborador">
        <TiDelete className="eliminar" onClick={() => eliminarColaborador(id)}></TiDelete>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <FaHeart color="red" onClick={() => like(id)}/> : <IoIosHeartEmpty onClick={() => like(id)}/> }
        </div>
    </div>
}

export default Colaborador