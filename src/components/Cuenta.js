import React from 'react';
import {Form, Input, Button, Card} from "antd";
import '../styles/cuenta.css';
import Foot from "./Foot";

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
                                name="username"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Contraseña"
                                name="password"
                                rules={[{required: true, message: 'Please input your password!'}]}
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
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Dirección"
                                name="username"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Teléfono"
                                name="username"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                    Siguiente
                                </Button>
                                <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                    Cancelar
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