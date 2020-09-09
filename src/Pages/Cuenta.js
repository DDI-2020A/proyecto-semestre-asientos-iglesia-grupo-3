import React from 'react';
import { Card} from "antd";
import '../styles/cuenta.css';
import Foot from "../components/Foot";
import FormCuenta from "./FormCuenta";

const Cuenta = () => {


   /* const handleSubmit= async (values) => {

        try {
            const user = await FIREBASE.auth.createUserWithEmailAndPassword(values.email, values.password);
            delete values.password;
            await FIREBASE.db.ref(`users/${user.uid}`).push(values);
            console.log('valores', values);
            message.success('Datos guardados')
        } catch (error) {
            message.error(error.message);
        }

    }*/


    return (
        <>
            <div className=" fondo-cuenta" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
                        <h2>Crear cuenta</h2>
                        <p>
                            Ingrese sus datos para crear una cuenta en Foros
                        </p>
                        <FormCuenta/>

                    </Card>
                </Card>
            </div>
            <Foot />

        </>
    );

}

export default Cuenta;