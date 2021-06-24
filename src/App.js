
import './App.css';
import Data from './components/Data';

import Sidebar from './components/Sidebar';

import{BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom"
import Data2 from './components/Data2';
import Projects from './Projects'

function App() {
  return (
    
    <Router>
      
    <div className="app">

        <Sidebar />
        

        <Switch>
        <Route exact path="/">
          <Redirect to="/accesscontrol" />
        </Route>
          <Route path="/management">
            <Data2 />
          </Route>
        
        
          <Route path="/accesscontrol">

          <Data />
          </Route>
        </Switch>
        
        
      
    </div>
    </Router>
  )
}

export default App;
