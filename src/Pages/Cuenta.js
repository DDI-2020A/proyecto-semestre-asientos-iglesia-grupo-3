import React, {useState} from 'react';
import {Form, Input, Button, Card, message} from "antd";
import '../styles/cuenta.css';
import Foot from "../components/Foot";
import {Link} from "react-router-dom";
import FIREBASE from '../firebase'

const Cuenta = () => {


    const handleSubmit= async (values) => {

        try {
            const user = await FIREBASE.auth.createUserWithEmailAndPassword(values.email, values.password);
            delete values.password;
            await FIREBASE.db.ref(`users/${user.uid}`).push(values);
            console.log('valores', values);
            message.success('Datos guardados')
        } catch (error) {
            message.error(error.message);
        }

    }


    return (
        <>
            <div className=" fondo-cuenta" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
                        <h2>Crear cuenta</h2>
                        <p>
                            Ingrese sus datos para crear una cuenta en Foros
                        </p>
                        <div >
                        <Form
                            name="basic"
                            onFinish={handleSubmit}
                        >
                            <Form.Item
                                label="Email"
                                name="Email"
                                rules={[{required: true, message: 'Porfavor ingrese su correo!'},
                                {
                                    type:"email",
                                    message: "Ingresa un correo valido"}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Contraseña"
                                name="Contrasena"
                                rules={[{required: true, message: 'Porfavor ingrese su contraseña!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item
                                label="Nombre"
                                name="Nombre"
                                rules={[{required: true, message: 'Porfavor ingese su nombre !'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Dirección"
                                name="Direccion"
                                rules={[{required: true, message: 'Porfavor ingrese su direccion'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Teléfono"
                                name="Telefono"
                                rules={[{required: true, message: 'Porfavor ingrese su teléfono'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                    <Link to="FormCuenta">Siguiente</Link>
                                </Button>
                                <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                    <Link to="/">Cancelar</Link>
                                </Button>
                            </Form.Item>
                        </Form>
                        </div>
                    </Card>
                </Card>
            </div>
            <Foot />

        </>
    );

}

export default Cuenta;