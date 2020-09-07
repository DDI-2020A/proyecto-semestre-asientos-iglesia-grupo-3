import React, {useState} from "react";
import {Button, Card, Col, Form, Input, message, Row, Space} from "antd";
import '../styles/registrarAsiento.css';
import {Link} from "react-router-dom";

const FormRegistrarAsiento1 = (props) =>{

const [current, SetCurrent] = useState( props.current);

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
                        </Row>


                        {current < 2 && (
                            <Form.Item >
                                <Button type="primary" htmlType="submit" >
                                    Siguiente
                                </Button>
                            </Form.Item>
                        )}
                        {current === 2 && (
                            <Form.Item >
                                <Button type="primary" htmlType="submit"  onClick={() => message.success('Se han registrado sus datos')}>
                                    <Link to="/ConfirmarAsiento"> Registrar </Link>
                                </Button>
                            </Form.Item >
                        )}
                        {current > 0 && (

                            <Form.Item >
                                <Button style={{ margin: '0 8px' }} >
                                    Regresar
                                </Button>
                            </Form.Item >
                        )}

                    </Form>

                </Card>
            </div>

        </>


    );








}

export default FormRegistrarAsiento1;