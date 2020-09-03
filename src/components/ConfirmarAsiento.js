import React from 'react';
import {Button, Card, Col, Descriptions, Divider, Form, Input, Modal, Row, Space} from "antd";
import FormRegistrarAsiento from "./FormRegistrarAsiento";
import Foot from "./Foot";
import {Link} from "react-router-dom";


const ConfirmarAsiento = () => {

    return (
        <>
            <div className="site-card-border-less-wrapper fondo-registrar-asiento" align="center">
                <Card className="colorBaseA tamanio-cuadro"  bordered={true}>
                    <Card className="colorBaseB tamanio-cuadro-interno "  bordered={true}>
                        <p>
                            Los datos registrados son:
                        </p>
                        <div>
                                <Divider dashed />
                                <Row gutter={16} align="center" >

                                    <Col xs={24} sm={24} md={8} lg={8}  span={8}>
                                        <div>
                                            <Descriptions
                                                column={{ xxl: 1, xl: 1, lg: 1 , md: 1, sm: 1, xs: 1 }}
                                            >
                                                <Descriptions.Item label="Nombre">Usuario 1</Descriptions.Item>
                                                <Descriptions.Item label="cedula">Cedula usuario</Descriptions.Item>
                                                <Descriptions.Item label="Telefono">Número de usuario</Descriptions.Item>
                                                <Descriptions.Item label="Horario">Horario</Descriptions.Item>
                                                <Descriptions.Item label="Puesto">Posición</Descriptions.Item>
                                            </Descriptions>
                                        </div>


                                    </Col>
                                    <Col xs={24} sm={24} md={16} lg={16}  span={8} >
                                        <Space align="center padding-btn-registrar">
                                            <p> imagen </p>

                                        </Space>
                                    </Col>

                                    <Divider dashed />

                                    <Col xs={24} sm={24} md={8} lg={8}  span={8} >
                                            <Button type="primary" htmlType="submit">
                                                <Link to="/RegistrarAsiento"> Cancelar </Link>
                                            </Button>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8}  span={8} >
                                        <Button type="primary" htmlType="submit">
                                            <Link to="/"> Aceptar </Link>
                                        </Button>

                                    </Col>
                                </Row>


                        </div>
                    </Card>
                </Card>
            </div>

            <Foot />

        </>
    );





}

export default ConfirmarAsiento;