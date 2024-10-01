//rafce (react arrow function component export)
import React from 'react'

const Pedido = (props) => {
    return (
        <div className="d-flex">
            <div className='d-flex align-items-center'>
                <i className={props.icone}></i>
            </div>
            <div className="ms-2 border flex-grow ">
                <h4 className="text-center">{props.titulo}</h4>
                <p className="text-center">{props.descricao}</p>
            </div>
        </div>
    )
}

export default Pedido
