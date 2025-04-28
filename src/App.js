import './App.css';
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  function manipularBotaoMais() {
    setContador(contador + 1);
  }

  function manipularBotaoMenos() {
    setContador(contador - 1);
  }

  return (
    <div>
      <p>Contador: {contador}</p>
      <button className='App-button' onClick={manipularBotaoMais}>
        Aumentar
      </button>
      {contador > 0 && (
        <>
          <button className='App-button' onClick={manipularBotaoMenos}>
            Diminuir
          </button>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Contador />
        <p>Clique no Botão para aumentar o número</p>
      </header>
    </div>
  );
}

export default App;
