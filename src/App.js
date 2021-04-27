import logo from './logo.svg';
import './App.css';
import {Text} from './component/Text'
import {Button} from './component/Button'
import {List} from './component/List'

const items=[
  {"name" : "banana" , "color": "yellow"},
  {"name" : "apple" , "color": "green"},
  {"name" : "mango" , "color": "blue"}
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world 


        </p>
        <Text name="Barry" colour="red" />
        <Text name="Larry" color="orange" />
        <Text name="Jenny" color="blue"  />
        <Button start={3} />
        <Button start={100} />
        <List items={items}/>
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
