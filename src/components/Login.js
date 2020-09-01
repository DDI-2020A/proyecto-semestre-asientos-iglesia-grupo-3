import React from 'react';
import {Form, Input, Button, Card} from "antd";
import '../styles/login.css';
import '../styles/cuenta.css';
import Foot from "./Foot";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className=" fondo-login" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
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
                            <p><Link to="/RecuperarContrasenia">¿Haz olvidado tu contraseña?</Link></p>
                            <p> <Link to="/Cuenta">Crear cuenta</Link></p>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    <Link to="/ForosPrincipal">Iniciar Sesion</Link>
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

export default Login;