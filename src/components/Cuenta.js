import React from 'react';
import {Form, Input, Button, Card} from "antd";
import '../styles/cuenta.css';
import Foot from "./Foot";
import {Link} from "react-router-dom";

const Cuenta = () => {
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
                            initialValues={{remember: true}}
                        >
                            <Form.Item
                                label="Email"
                                name="usermail"
                                rules={[{required: true, message: 'Porfavor ingrese su correo!'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Contraseña"
                                name="password"
                                rules={[{required: true, message: 'Porfavor ingrese su contraseña!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item
                                label="Verificar Contraseña"
                                name="checkpassword"
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item
                                label="Nombre"
                                name="username"
                                rules={[{required: true, message: 'Porfavor ingese su nombre !'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Dirección"
                                name="userdirection"
                                rules={[{required: true, message: 'Porfavor ingrese su direccion'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Teléfono"
                                name="userphone"
                                rules={[{required: true, message: 'Porfavor ingrese su teléfono'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                    <Link to="/Formcuenta">Siguiente</Link>
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