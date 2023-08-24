import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils'

function App() {
  const isIndex = false;
  
  return (
    <div>
      <header className='App-header'>
        <img src={logo} alt='Holberton logo'></img>
        <h1>School dashboard</h1>
      </header>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>

      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      </footer>
    </div>
  );
}

export default App;
