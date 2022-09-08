import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'César'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <SayMyName name="Carlos" />
      <SayMyName name={nome} />
      <Pessoa nome="César" idade="29" profissao="Programador" foto="https://via.placeholder.com/150" carlos="15" />
    </div>
  );
}

export default App;
