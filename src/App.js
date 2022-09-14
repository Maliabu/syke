import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import Room from './Views/Room';
import SignUp from './Views/SignUp';
import Gallery from './Views/Gallery';

function App() {
    return ( <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />  <
        Route path = "room"
        element = { < Room / > }
        />  <
        Route path = "signup"
        element = { < SignUp / > }
        />  <
        Route path = "gallery"
        element = { < Gallery / > }
        />   < /
        Routes > );
}

export default App;