import {Route, Switch} from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Cuenta from "../Pages/Cuenta";
import Login from "../Pages/Login";
import RegistrarAsiento from "../Pages/RegistrarAsiento";
import React from "react";
import RecuperarContrasenia from "../Pages/RecuperarContrasenia";
import ForosPrincipal from "../Pages/ForosPrincipal";
import Perfil from "../Pages/Perfil";
import FormCuenta from "../Pages/FormCuenta";
import FormRecuperar from "../Pages/FormRecuperar";
import NuevaContrasenia from "../Pages/NuevaContrasenia";
import ConfirmarAsiento from "../Pages/ConfirmarAsiento";
import MisForos from "../Pages/MisForos";
import CrearForos from "../Pages/CrearForos";
import Foro from "../Pages/Foro";

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