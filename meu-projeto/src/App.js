import './App.css';

function App() {
  const name = 'César'

  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  function sub(a, b) {
    return a - b
  }

  function mult(a, b) {
    return a * b
  }

  function div(a, b) {
    return a / b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <p>Subtração: {sub(3, 2)}</p>
      <p>Multiplicação: {mult(3, 3)}</p>
      <p>Divisão: {div(6, 2)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
