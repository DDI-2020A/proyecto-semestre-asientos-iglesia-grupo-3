import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


import Inicio from './Inicio';
import Login from './Login';
import RegistrarAsiento from './RegistrarAsiento';
import Cuenta from './Cuenta';
import {Button} from "antd";

function App() {
    return (


        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Cuenta">Cuenta</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
                <Button><Link to="/RegistrarAsiento">Registrar Asiento</Link></Button>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                    <Route path="/Cuenta">
                        <Cuenta />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="/RegistrarAsiento">
                        <RegistrarAsiento />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
