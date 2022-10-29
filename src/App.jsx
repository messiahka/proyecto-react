import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      
      <body>

      <img src={logo} className="App-logo" alt="logo" />
      
        <ItemListContainer greeting='HOLA CODER, PRUEBA MIS HAMBURGUESAS' />

      </body>
    </div>
  );
}

export default App;
