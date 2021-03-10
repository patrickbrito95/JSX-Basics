// Importar React e ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';


// Criar um componente React 
const App = () => {
    
    const TextButton = { text: 'Click Me!'}
    
    return (
    <div>
        <label className="label" htmlFor="name">Enter name:</label>
          <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>{TextButton.text}</button>
      </div>
      )
}

// Pegar o componente e mostrar na tela
ReactDOM.render(
    <App />,
     document.querySelector('#root')
);
