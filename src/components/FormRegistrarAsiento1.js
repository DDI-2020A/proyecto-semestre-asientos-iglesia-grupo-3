import React from "react";
import {Button, Card, Col,Form, Input, Row, Space} from "antd";
import '../styles/registrarAsiento.css';

const FormRegistrarAsiento1 = () =>{



    return (

        <>

            <div   align="center">
                <Card className="tamanio-formularios "  bordered={true}>
                    <Form
                        name="registrar-asiento"
                        initialValues={{remember: true}}

                    >
                        <Row gutter={16} align="center" >

                            <Col xs={24} sm={24} md={16} lg={16}  span={8}>

                                <Form.Item
                                    name="ra-cedula-pasaporte"
                                    label="Cédula / Pasaporte"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor complete el campo',
                                        },
                                    ]}
                                >
                                    <Input id="ra-cecula-pasaporte" placeholder="Ingrese su Cédula o Pasaporte" />
                                </Form.Item>
                                <Form.Item
                                    name="ra-nombre-usuario"
                                    label="Nombre"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingrese su nombre',
                                        },
                                    ]}
                                >
                                    <Input id="ra-nombre-usuario" placeholder="Ingrese su nombre" />
                                </Form.Item>
                                <Form.Item
                                    name="ra-telefono-usuario"
                                    label="Teléfono"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingrese su teléfono',
                                        },
                                    ]}
                                >
                                    <Input id="ra-telefono-usuario" placeholder="Ingrese su teléfono" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8}  span={8} >
                                <Space align="center padding-btn-registrar">
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Aceptar
                                        </Button>
                                    </Form.Item>
                                </Space>
                            </Col>

                        </Row>
                    </Form>

                </Card>
            </div>

        </>


    );








}

export default FormRegistrarAsiento1;