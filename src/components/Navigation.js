import {Route, Switch} from "react-router-dom";
import Inicio from "./Inicio";
import Cuenta from "./Cuenta";
import Login from "./Login";
import RegistrarAsiento from "./RegistrarAsiento";
import React from "react";

const Navigation = () => {

    return (
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
    )
}

export default Navigation;