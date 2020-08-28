import React from 'react';
import {Form, Input, Button, Card} from "antd";
import '../styles/login.css';
import '../styles/cuenta.css';
import Foot from "./Foot";


const RecuperarContraseña = () => {
    return (
        <>
            <div className="site-card-border-less-wrapper fondo-login" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
                        <p>
                            Ingrese el correo con el que se registro
                        </p>
                        <div>
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
                                <p>Confirmar Correo</p>
                                    <Form.Item
                                        label="Email"
                                        name="username"
                                        rules={[{required: true, message: 'Please input your username!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                            Aceptar
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
            <Foot/>

        </>
    );

}

export default RecuperarContraseña;