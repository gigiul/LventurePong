import logo from './pong.png';
import './App.css';
import Button from "@mui/material/Button"
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant='contained' color="success"><Link to="/page">Login</Link></Button>
    	<p>
        Join Lventure ping-pong community!
        </p>
      </header>
    </div>     
);
}

export default App;
