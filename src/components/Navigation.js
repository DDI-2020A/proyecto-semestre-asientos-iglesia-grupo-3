import {Route, Switch} from "react-router-dom";
import Inicio from "./Inicio";
import Cuenta from "./Cuenta";
import Login from "./Login";
import RegistrarAsiento from "./RegistrarAsiento";
import React from "react";
import RecuperarContraseña from "./RecuperarContraseña";
import ForosPrincipal from "./ForosPrincipal";

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
            <Route path="/RecuperarContraseña">
                <RecuperarContraseña/>
            </Route>
            <Route path="/ForosPrincipal">
                <ForosPrincipal />
            </Route>
        </Switch>
    )
}

export default Navigation;