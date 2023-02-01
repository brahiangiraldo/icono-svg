//import logo from './logo.svg';
import './App.css';
import Logo from './Logo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Logo color= "black" width= {250} heigth={250}/>
      <Logo color= "#fff000" width= {250} heigth={250}/>
      </header>
    </div>
  );
}

export default App;


