import React from 'react';
import {Form, Input, Button, Card} from "antd";
import '../styles/login.css';
import '../styles/bill.css';
import Foot from "../components/Foot";
import {Link} from "react-router-dom";

const NuevaContrasenia = () => {
    return (
        <>
            <div className="site-card-border-less-wrapper fondo-login" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
                        <p>
                            Cambiar Contraseña
                        </p>
                        <div>
                            <Form
                                name="basic"
                                initialValues={{remember: true}}
                            >
                            <Form.Item
                                label="Contraseña"
                                name="password"
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>
                                <p>Verificar Contraseña</p>
                                    <Form.Item
                                        label="Contraseña"
                                        name="password"
                                        rules={[{required: true, message: 'Please input your password!'}]}
                                    >
                                        <Input.Password/>
                                    </Form.Item>
                                <div>
                                        <li><strong>Mínimo 8 Caracteres</strong></li>
                                        <li>Mínimo  1 Caracter en Mayúscula</li>
                                        <li>Mínimo  1 Caracter en Minúscula</li>
                                        <li>Mínimo  1 Caracter númerico</li>
                                </div>
                                <Form.Item>
                                    <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                        <Link to="/Login"> Aceptar</Link>
                                    </Button>
                                    <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                        <Link to="/Login">Cancelar</Link>
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

export default NuevaContrasenia;