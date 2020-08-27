import React from 'react';
import Header from "./Header";
import {Form, Input, Checkbox, Button, Card, Row, Col, Space, Divider} from "antd";
import '../styles/registrarAsiento.css';
import ImgDirec from "../images/ImgDirec.jpg";
import Foot from "./Foot";

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
                                <Divider dashed />
                            <Row gutter={16} align="center" >

                                <Col xs={24} sm={24} md={16} lg={16}  span={8}>

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
                                <Col xs={24} sm={24} md={8} lg={8}  span={8} >
                                    <Space align="center padding-btn-registrar">

                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Registrar Asiento
                                        </Button>
                                    </Form.Item>
                                    </Space>
                                </Col>

                            </Row>
                        </Form>



                        </div>
                    </Card>
                </Card>
            </div>


            <Foot />

        </>
    );

}

export default RegistrarAsiento;