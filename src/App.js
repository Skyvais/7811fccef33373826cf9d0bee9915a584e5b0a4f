import Logo from './sorrento_by_the_sea_logo.jpg'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Home} from './component/Home'
import {Apartment} from './component/Apartment'
import {Pricing} from './component/Pricing'
import {Book} from './component/Book'
import {Local} from './component/Local'
import {Contact} from './component/Contact'
import {NotFound} from './component/NotFound'

import {Header} from './component/Header'

const Navitems=[
  {"name" : "Home" , "link": "/"},
  {"name" : "The Apartment" , "link": "/apartment"},
  {"name" : "Pricing" , "link": "/pricing"},
  {"name" : "Book" , "link": "/book"},
  {"name" : "Local Area" , "link": "/local"},
  {"name" : "Contact" , "link": "/contact"}
]
function App() {
  return (
    <div className="website">
    < Header logo={Logo} nav={Navitems} />
    <main className="content"></main>
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/home">
        <Home />
        </Route>
        <Route path="/apartment">
        <Apartment />
      </Route>
      <Route path="/pricing">
        <Pricing/>
        </Route>
        <Route path="/book">
        <Book />
        </Route>
        <Route path="/local">
          <Local />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
       </Route>
      </Switch>
    <footer className="footer"></footer>
    </div>
  );
}

export default App;
