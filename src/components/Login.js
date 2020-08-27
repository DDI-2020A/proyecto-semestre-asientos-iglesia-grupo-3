import React from 'react';
import Header from "./Header";
import {Form, Input, Checkbox, Button, Card} from "antd";
import '../styles/login.css';

const Login = () => {
    return (
        <>

            <Header/>

            <div className="site-card-border-less-wrapper " align="center">
                <Card className="colorBaseA tamanio-cuadro"  bordered={false}>
                    <p>
                        Se parte de nosotros y comparte opiniones,
                        experiencias dentro de un ambiente
                        seguro y abierto al dialogo.
                    </p>
                    <div>
                        <Form
                            name="basic"
                            initialValues={{remember: true}}

                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Card>
            </div>


        </>
    );

}

export default Login;