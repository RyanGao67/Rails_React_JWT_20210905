import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SignIn from './component/SignIn'
import Welcome from "./component/Welcome";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={SignIn}/>
        <Route exact path='/welcome' component={Welcome}/>
      </Router>
    </div>
  );
}

export default App;
