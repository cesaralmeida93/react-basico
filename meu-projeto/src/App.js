import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = 'César'

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <h2>Alterando o JSX</h2>
      <Frase />
      <SayMyName name="Carlos" />
      <SayMyName name={nome} />
      <Pessoa nome="César" idade="29" profissao="Programador" foto="https://via.placeholder.com/150" carlos="15" />
    </div>
  );
}

export default App;
