import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {
  const nome = 'Misael'
  const url = 'https://via.placeholder.com/150'
  const meusItens = ['react', 'vue', 'angular']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Olá React</h1>
        <h2>Meu Primeiro App</h2>
        <p>Olá, {nome}</p>
        <img src={url} alt="Minha Imagem"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld/>
        <SayMyName nome={nome}/>
        <SayMyName nome='Dudu'/>
        <SayMyName nome='Raphael Veiga'/>
        <Pessoa 
        nome='Weverton' 
        idade='35' 
        profissao='Goleiro' 
        foto="https://via.placeholder.com/150"/>
        <List/>
        <Evento/>
        <Form/>
        <h1>Renderização Condicional</h1>
        <Condicional/>
        <h1>Renderização de Listas</h1>
        <OutraLista itens={meusItens}/>
        <OutraLista itens={[]}/>
      </header>
    </div>
  );
}

export default App;
