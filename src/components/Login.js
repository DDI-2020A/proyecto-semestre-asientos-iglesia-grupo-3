import React from 'react';
import Header from "./Header";
import {Form, Input, Button, Card} from "antd";
import '../styles/login.css';
import '../styles/App.css';
import Foot from "./Foot";

const Login = () => {
    return (
        <>

            <Header/>

            <div className="site-card-border-less-wrapper fondo-login" align="center">
                <Card className="ant-card-cover tamanio-cuadro"  bordered={false}>
                    <h1>
                        Se parte de nosotros y comparte opiniones,
                        experiencias dentro de un ambiente
                        seguro y abierto al diálogo.
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
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Iniciar Sesion
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Card>

            </div>
            <Foot/>

        </>
    );

}

export default Login;