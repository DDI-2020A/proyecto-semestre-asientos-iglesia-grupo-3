import {Route, Switch} from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Bill from "../Pages/Bill";
import Login from "../Pages/Login";
import RegisterSeat from "../Pages/RegisterSeat";
import React from "react";
import PasswordReset from "../Pages/PasswordReset";
import MainForum from "../Pages/MainForum";
import Profile from "../Pages/Profile";
import FormBill from "../Pages/FormBill";
import MyForums from "../Pages/MyForums";
import CreateForum from "../Pages/CreateForum";
import Forum from "../Pages/Forum";
import UpdateProfile from "../Pages/UpdateProfile";

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
                <MainForum />
            </Route>
            <Route path="/perfil/:uid">
                <Profile/>
            </Route>
            <Route path="/misforos/:uid">
                <MyForums/>
            </Route>
            <Route path="/crearforos/:uid">
                <CreateForum/>
            </Route>
            <Route path="/foro/:id/:uid">
                <Forum/>
            </Route>
            <Route path="/actualizarperfil/:uid">
                <UpdateProfile/>
            </Route>
        </Switch>
    )
}

export default Navigation;