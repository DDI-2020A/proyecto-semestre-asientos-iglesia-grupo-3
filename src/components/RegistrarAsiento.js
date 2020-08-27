import React from 'react';
import Header from "./Header";
import {Form, Input, Checkbox, Button, Card, Row, Col} from "antd";
import '../styles/registrarAsiento.css';
import ImgDirec from "../images/ImgDirec.jpg";

const RegistrarAsiento = () => {
    return (
        <>

            <Header/>

            <div className="site-card-border-less-wrapper fondo-registrar-asiento" align="center">
                <Card className="colorBaseA tamanio-cuadro opacidad-ventanas"  bordered={false}>
                    <h2>Registrar Asiento</h2>
                    <Card className="colorBaseB tamanio-cuadro-interno "  bordered={false}>
                        <p>
                            Ingrese sus datos para asignarle un asiento para la ceremonia en la Iglesia X, según
                            su disponibilidad de horario
                        </p>
                        <div className="sin-opacidad">
                            <Form
                                name="basic"
                                initialValues={{remember: true}}
                            >
                            <Row gutter={16} align="center" >

                                <Col xs={32} sm={32} md={16} lg={16}  span={8}>

                                    <Form.Item
                                        name="cédula de usuario"
                                        label="Cedula / Pasaporte"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor complete el campo',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Ingrese su Cédula o Pasaporte" />
                                    </Form.Item>
                                    <Form.Item
                                        name="nombre de usuario"
                                        label="Nombre"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingrese su nombre',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Ingrese su nombre" />
                                    </Form.Item>
                                    <Form.Item
                                        name="telefono de usuario"
                                        label="Telefono"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingrese su teléfono',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Ingrese su teléfono" />
                                    </Form.Item>
                                </Col>
                                <Col xs={32} sm={32} md={8} lg={8}  span={8} >
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Registrar Asiento
                                        </Button>
                                    </Form.Item>
                                </Col>

                            </Row>
                        </Form>



                        </div>
                    </Card>
                </Card>
            </div>


        </>
    );

}

export default RegistrarAsiento;