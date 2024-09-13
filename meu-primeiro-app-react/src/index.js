import React from 'react'
import ReactDOM from 'react-dom'

//TODO
//1. DEFINIR UM COMPONENTE REACT QUE SE CHAMA PrimeiroNome E PRODUZ UM ELEMENTO P COM O SEU NOME
const PrimeiroNome = () => {
    return <p>Eduardo</p>
}

//2. DEFINIR UM COMPONENTE REACT QUE SE CHAMA Sobrenome E PRODUZIR UM ELEMENTO HTML P COM O SEU SOBRENOME
const Sobrenome = () => {
    return <p>Berlatto</p>
}

//3. EXIBIR AMBOS COMO FILHOS DO COMPONENTE APP
const App = () => {
    //jsx: javascript extension
    return <div>
        <PrimeiroNome />
        <Sobrenome />
        </div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)