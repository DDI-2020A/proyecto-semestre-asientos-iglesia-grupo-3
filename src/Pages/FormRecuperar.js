import React from "react";
import {Button, Card, Form, Input} from "antd";
import '../styles/login.css';
import '../styles/bill.css';
import Foot from "../components/Foot";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {Link} from "react-router-dom";

const FormRecuperar = () => {

    return (

        <>
            <div className="site-card-border-less-wrapper fondo-login" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
                        <p>
                            Ingrese el código
                        </p>
                        <div>
                            <Form
                                name="basic"
                                initialValues={{remember: true}}
                            >
                                <Input.Password
                                    placeholder="input password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                                <Form.Item>
                                    <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                        <Link to="/NuevaContrasenia">Aceptar</Link>
                                    </Button>
                                    <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                        <Link to="RecuperarContrasenia">Reenviar</Link>
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Card>
                </Card>
            </div>
            <Foot/>
        </>
    )
}
export default FormRecuperar;