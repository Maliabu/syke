import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index';
import { Routes, Route } from "react-router-dom";
import Home from './Views/Home';
import Rooms from './Views/Rooms';
import SignUp from './Views/SignUp';
import Services from './Views/Services';
import About from './Views/About';

export default function App() {
    return ( <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />  <
        Route path = "room"
        element = { < Rooms / > }
        />  <
        Route path = "signup"
        element = { < SignUp / > }
        />  <
        Route path = "services"
        element = { < Services / > }
        />   <
        Route path = "about"
        element = { < About / > }
        />   <
        /
        Routes >

    );
}