# React Básico

- fonte: [Matheus Battisti - Hora de Codar](https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO)


## Aula 1 e 2

- `npx create-react-app meu-projeto`
- `cd meu projeto`
- `npm start`


## Aula 3

- possível integrar apenas 1 elemento pai
- atenção as propriedades JSX, os nomes são parecidos com HTML, mas não são identicos
- ex:
```javascript
<div className="App"> //JSX
<div class="App"> //HTML
```


## Aula 4 - Componentes
- criação de um componente
```javascript
function Frase() {
    return (
        <div>
            <p>Este é um componente com uma frase!</p>
        </div>
    )

}

export default Frase;
```
- componentes podem ser importados para qualquer arquivo JS, inclusive usado em outros componentes

```javascript
import Frase from "./Frase";

function HelloWorld() {

    return (
        <div>
            <Frase />
            <h1>Meu primeiro componente</h1>
            <Frase />
            <Frase />
        </div>
    )

}

export default HelloWorld;
```

## Aula5 - Props
- valores passados para os componentes
- podem ser dinâmicos
- valor da props é passado como um atributo na chamada do componente
- props são somente leitura

- Ex1 props:
```javascript
function SayMyName(props) {
    return (
        <div>
            <p>Olá {props.name}</p>
        </div>
    )
}

export default SayMyName


import './App.css';
import SayMyName from './components/SayMyName';

function App() {
  const nome = 'César'
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <SayMyName name="Carlos" />
      <SayMyName name={nome} />
    </div>
  );
}

export default App;
```

- Ex2 props:
```javascript
function Pessoa({ nome, idade, profissao, foto }) {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa

import './App.css';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <Pessoa nome="César" idade="29" profissao="Programador" foto="https://via.placeholder.com/150" carlos="15" />
    </div>
  );
}

export default App;
```

## Aula6 - CSS no React(CSS modules)
- CSS pode ser adicionado de forma global na aplicação
- É melhor estilizar a nível de componentes
- Utilizar CSS Modules para isso
- Basta criar um arquivo como: `Componente.module.css`
- E chamar este CSS no componente
- o nome das classes tem que ser camelcase ou _

- Ex CSS:
```css
.fraseContainer {
    background-color: #333;
    border: 1px solid #111;
}

.fraseContent {
    color: #fff;
    background-color: #333;
    margin: 0;
}
```

```javascript
import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
        </div>
    )

}

export default Frase;
```