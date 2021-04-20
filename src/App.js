import logo from './logo.svg';
import './App.css';
import {Text} from './component/Text'
import {Button} from './component/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world 


        </p>
        <Text name="Barry"/>
        <Text name="Larry"/>
        <Button/>
        <Button/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
