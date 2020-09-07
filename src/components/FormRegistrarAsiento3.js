import React from "react";
import {Button, Card, Col,Divider, Form, Input, Row,Space} from "antd";
import {Link} from "react-router-dom";
import '../styles/registrarAsiento.css';

const FormRegistrarAsiento2 = () =>{

    return (

        <>
            {/*Ultima ventana Elegir asiento*/}

            <div  align="center">
                <Card className="tamanio-formularios "  bordered={true}>
                    <p>
                        Elegir posición de asiento
                    </p>
                    <div>
                        <Form
                            name="registrar-asiento"
                            initialValues={{remember: true}}
                        >
                            <Divider dashed />
                            <Row gutter={16} align="center" >

                                <Col xs={24} sm={24} md={12} lg={12}  span={8}>
                                    <Form.Item
                                        name="ra-fila "
                                        label="Fila "
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor elija una fila',
                                            },
                                        ]}
                                    >
                                        <Input id="ra-fila" placeholder="Ingresar fila" />
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12}  span={8} >
                                    <Form.Item
                                        name="ra-columna"
                                        label="Columna"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor elija una columna',
                                            },
                                        ]}
                                    >
                                        <Input id="ra-columna" placeholder="Ingresar columna" />
                                    </Form.Item>
                                </Col>

                            </Row>

                        </Form>
                    </div>
                </Card>
            </div>


        </>


    );
}

export default FormRegistrarAsiento2;