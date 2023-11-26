import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá, Raphael!</h1>
        <p>Bem-vindo ao meu projeto React.</p>
        <h1>Contador</h1>
        <p>Contagem: {count}</p>
        <button onClick={decrement}>Remover</button>
        <button onClick={increment}>Adicionar</button>
      </header>
    </div>
  );
}

export default App;
