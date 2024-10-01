import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'


const App = () => {
    const textoOK = "Já chegou!"
    const textoNOK = "Ainda não chegou!"
    const funcaoOK = () => alert("Agradecemos!")
    const funcaoNOK = () => alert("Verificaremos!")
    const componenteFeedback = (
        <Feedback
            textoOK={textoOK}
            textoNOK={textoNOK}
            funcaoOK={funcaoOK}
            funcaoNOK={funcaoNOK} />
    )
    return (
        <div
            className='container border mt-2'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='text-center'>Seus pedidos...</h1>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 col-xl-3 col-md-6">
                    <Cartao
                        cabecalho="22/04/2021">
                        <Pedido
                            icone="fa-solid fa-hdd fa-2x"
                            titulo="SSD"
                            descricao="SSD Kingston A400" />
                        {componenteFeedback}
                    </Cartao>
                </div>
                <div className="col-12 col-xl-3 col-md-6">
                    <Cartao
                        cabecalho="24/02/2022">
                        <Pedido
                            icone="fa-solid fa-gamepad fa-2x"
                            titulo="Gamepad"
                            descricao="8BitDo" />
                        {componenteFeedback}
                    </Cartao>
                </div>
                <div className="col-12 col-xl-3 col-md-6">
                    <Cartao
                        cabecalho="21/10/2023">
                        <Pedido
                            icone="fa-solid fa-microchip fa-2x"
                            titulo="Processador"
                            descricao="Intel Core i9" />
                        {componenteFeedback}
                    </Cartao>
                </div>
                <div className="col-12 col-xl-3 col-md-6">
                    <Cartao
                        cabecalho="10/02/2024">
                        <Pedido
                            icone="fa-solid fa-desktop fa-2x"
                            titulo="Monitor"
                            descricao="Monitor Dell Alienware" />
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)