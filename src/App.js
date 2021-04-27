import Logo from './sorrento_by_the_sea_logo.jpg'
import './App.css';
import {Header} from './component/Header'

const Navitems=[
  {"name" : "Home" , "link": "/home"},
  {"name" : "The Apartment" , "link": "/apartment"},
  {"name" : "Pricing" , "link": "/pricing"},
  {"name" : "Book" , "link": "/book"},
  {"name" : "Local Area" , "link": "/local"},
  {"name" : "Contact" , "link": "/contact"}
]
function App() {
  return (
    <div className="website">
      < Header logo={Logo} />
    <main className="content"></main>
    <footer className="footer"></footer>
    </div>
  );
}

export default App;
