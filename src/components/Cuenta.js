import React from 'react';
import Header from "./Header";
import {Form, Input, Button, Card} from "antd";
import '../styles/cuenta.css';
import '../styles/login.css';
import '../styles/App.css';
import Foot from "./Foot";

const Login = () => {
    return (
        <>

            <Header/>

            <div className="site-card-border-less-wrapper fondo-cuenta" align="center">
                <Card className="ant-card-cover tamanio-cuadro" style={{marginTop:0}}  bordered={false}>
                    <h1>
                        Llene los siguientes campos:
                    </h1>
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
                                    Aceptar
                                </Button>
                                <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                    Cancelar
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Card>

            </div>
            <Foot />

        </>
    );

}

export default Login;