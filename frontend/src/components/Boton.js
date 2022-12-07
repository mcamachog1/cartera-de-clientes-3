import React from 'react'

function Boton(props) {
	return(
		<button
			className={ props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
			onClick={props.manejarClic}>
			{props.texto}
		</button>
	)
}

export default Boton;