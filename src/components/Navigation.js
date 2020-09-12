import {Route, Switch} from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Bill from "../Pages/Bill";
import Login from "../Pages/Login";
import RegisterSeat from "../Pages/RegisterSeat";
import React from "react";
import RecuperarContrasenia from "../Pages/RecuperarContrasenia";
import ForosPrincipal from "../Pages/ForosPrincipal";
import Perfil from "../Pages/Perfil";
import FormBill from "../Pages/FormBill";
import FormRecuperar from "../Pages/FormRecuperar";
import NuevaContrasenia from "../Pages/NuevaContrasenia";
import MisForos from "../Pages/MisForos";
import CrearForos from "../Pages/CrearForos";
import Foro from "../Pages/Foro";

const Navigation = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Inicio />
            </Route>
            <Route path="/Bill">
                <Bill />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/RegisterSeat">
                <RegisterSeat />
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
            <Route path="/FormBill">
                <FormBill/>
            </Route>
            <Route path="/ForosPrincipal">
                <ForosPrincipal />
            </Route>
            <Route path="/Perfil">
                <Perfil/>
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