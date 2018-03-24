import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Login />
                <Signup />
            </div>
        );
    }
}

export default App;
