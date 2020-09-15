import React from 'react';
import {Form, Input, Button, Card, message} from "antd";
import '../styles/login.css';
import '../styles/bill.css';
import Foot from "../components/Foot";
import {Link} from "react-router-dom";
import FIREBASE from "../firebase";
import { useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();
    const handleLogin = async (values) => {
        try {
            await FIREBASE.auth.signInWithEmailAndPassword(values.userMail, values.userPassword);
            history.push("/ForosPrincipal")
        } catch(error) {
            message.error(error.message)
        }
    }

    return (
        <>
            <div className=" site-card-border-less-wrapper fondo-login" align="center">
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
                            onFinish={handleLogin}

                        >
                            <Form.Item
                                label="Email"
                                name="userMail"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Contraseña"
                                name="userPassword"
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <p><Link to="/PasswordReset">¿Haz olvidado tu contraseña?</Link></p>
                            <p> <Link to="/Bill">Crear cuenta</Link></p>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Iniciar Sesion
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    </Card>
                </Card>
            </div>
            <Button><Link to="/ForosPrincipal">ir directo</Link></Button>
            <Foot/>

        </>
    );

}

export default Login;