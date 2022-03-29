// page imports
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
 import { useState } from "react";
 
import HomePage from './pages/HomePage';
import VideoDetailsPage from "./pages/VideoDetailsPage"
import PlaylistPage from './pages/PlaylistPage';

function App() {
  const [list, setList] = useState([]);

  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route  
              path="/videos/:id"
              render={ () => <VideoDetailsPage list={list} setList={setList} />} >              
            </Route>
            <Route 
              path="/playlist" 
              render={() => <PlaylistPage list={list} />}>              
              
            </Route>          
          </Switch>
       </Router>     
    </div>
  );
}

export default App;
