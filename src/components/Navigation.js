import {Route, Switch} from "react-router-dom";
import Inicio from "./Inicio";
import Cuenta from "./Cuenta";
import Login from "./Login";
import RegistrarAsiento from "./RegistrarAsiento";
import React from "react";
import RecuperarContrasenia from "./RecuperarContrasenia";
import ForosPrincipal from "./ForosPrincipal";
import Perfil from "./Perfil";
import FormCuenta from "./FormCuenta";
import FormAvatar from "./FormAvatar";
import FormRecuperar from "./FormRecuperar";
import NuevaContrasenia from "./NuevaContrasenia";
import ConfirmarAsiento from "./ConfirmarAsiento";
import MisForos from "./MisForos";
import CrearForos from "./CrearForos";
import Foro from "./Foro";

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
            <Route path="/RecuperarContrasenia">
                <RecuperarContrasenia/>
            </Route>
            <Route path="/NuevaContrasenia">
                <NuevaContrasenia/>
            </Route>
            <Route path="/FormRecuperar">
                <FormRecuperar/>
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
            <Route path="/ConfirmarAsiento">
                <ConfirmarAsiento/>
            </Route>
            <Route path="/MisForos">
                <MisForos/>
            </Route>
            <Route path="/CrearForos">
                <CrearForos/>
            </Route>
            <Route path="/Foro">
                <Foro/>
            </Route>
        </Switch>
    )
}

export default Navigation;