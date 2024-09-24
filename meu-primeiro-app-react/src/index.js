import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

//TODO
//1. DEFINIR UM COMPONENTE REACT QUE SE CHAMA PrimeiroNome E PRODUZ UM ELEMENTO P COM O SEU NOME
const PrimeiroNome = () => <p>Eduardo</p>

//2. DEFINIR UM COMPONENTE REACT QUE SE CHAMA Sobrenome E PRODUZIR UM ELEMENTO HTML P COM O SEU SOBRENOME
const Sobrenome = () => <p>Berlatto</p>


//3. EXIBIR AMBOS COMO FILHOS DO COMPONENTE APP
const App = () => {
    //jsx: javascript extension - permite HTML dentro de uma função Javascript
    const estilosBotao = {marginTop: 12, paddingTop: 8,
        paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white',
        border: 'none', width: '100%', borderRadius: 8, boxSizing: 'border-box'}
    
    const textoDoRotulo = 'Nome:'

    const textoDoBotao = () => 'Enviar'

    const aoClicar = () => alert('Clicou!')

    return(
        <div
        style={{margin: 'auto', width: 768, 
        backgroundColor: '#EEE', padding: 12, 
        borderRadius: 8}}>
            <label 
                className='rotulo'
                htmlFor='nome'
                style={{display: 'block', 
                marginBottom: 4}}>
                {textoDoRotulo}
            </label>
            <input 
                id='nome'
                type="text"
                style={{paddingTop: 8, paddingBottom: 8,
                borderStyle: 'hidden', width: '100%',
                borderRadius: 8, outline: 'none', boxSizing: 'border-box'}} />
            <button
                onClick={() => aoClicar()}
                style={estilosBotao}>
                {textoDoBotao()}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)