import {Route, Switch} from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Bill from "../Pages/Bill";
import Login from "../Pages/Login";
import RegisterSeat from "../Pages/RegisterSeat";
import React from "react";
import PasswordReset from "../Pages/PasswordReset";
import ForosPrincipal from "../Pages/ForosPrincipal";
import Perfil from "../Pages/Perfil";
import FormBill from "../Pages/FormBill";
import MisForos from "../Pages/MisForos";
import CrearForos from "../Pages/CrearForos";
import Foro from "../Pages/Foro";

const Navigation = () => {

    return (
        <Switch>
            <Route exact path="/">
                <Inicio />
            </Route>
            <Route path="/bill">
                <Bill />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/RegisterSeat">
                <RegisterSeat />
            </Route>
            <Route path="/passwordreset">
                <PasswordReset/>
            </Route>
            <Route path="/formBill">
                <FormBill/>
            </Route>
            <Route path="/forosprincipal/:uid">
                <ForosPrincipal />
            </Route>
            <Route path="/perfil/:userUid">
                <Perfil/>
            </Route>
            <Route path="/MisForos">
                <MisForos/>
            </Route>
            <Route path="/CrearForos">
                <CrearForos/>
            </Route>
            <Route path="/foro/:id">
                <Foro/>
            </Route>
        </Switch>
    )
}

export default Navigation;