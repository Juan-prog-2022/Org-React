import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    const {colorPrimario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    // Validar colorPrimario
    const colorPrimarioValido = typeof colorPrimario === 'string' ? colorPrimario : '#000000'; // Default color

    // Obtener los colores de los equipos en un objeto
    const obj = {
        backgroundColor: hexToRgba(colorPrimarioValido, 0.5)
    }

    const estiloTitulo = {borderColor: colorPrimarioValido}

    return (
        <>
            {
                colaboradores.length > 0 &&
                <section className="equipo" style={obj}>
                    <input 
                        type="color"
                        className="input-color"
                        value={colorPrimarioValido}
                        onChange={(evento) => {
                            actualizarColor(evento.target.value, id)
                        }}
                    />
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className="colaboradores">
                        {
                            colaboradores.map((colaborador, index) => (
                                <Colaborador 
                                    datos={colaborador} 
                                    key={index} 
                                    colorPrimario={colorPrimarioValido}
                                    eliminarColaborador={eliminarColaborador}
                                    like={like}
                                />
                            ))
                        }
                    </div>
                </section>
            }
        </>
    );  
}

export default Equipo;
