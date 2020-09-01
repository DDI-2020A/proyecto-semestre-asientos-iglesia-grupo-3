import {Route, Switch} from "react-router-dom";
import Inicio from "./Inicio";
import Cuenta from "./Cuenta";
import Login from "./Login";
import RegistrarAsiento from "./RegistrarAsiento";
import React from "react";
import RecuperarContraseña from "./RecuperarContraseña";
import ForosPrincipal from "./ForosPrincipal";
import Perfil from "./Perfil";
import FormCuenta from "./FormCuenta";
import FormAvatar from "./FormAvatar";

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
            <Route path="/FormCuenta">
                <FormCuenta/>
            </Route>
            <Route path="/FormAvatar">
                <FormAvatar/>
            </Route>
            <Route path="/ForosPrincipal">
                <ForosPrincipal />
            </Route>
            <Route path="/Perfil">
                <Perfil/>
            </Route>
        </Switch>
    )
}

export default Navigation;