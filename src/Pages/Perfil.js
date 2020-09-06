import React from 'react';
import {Card, Col, Row, Button,} from 'antd';
import '../styles/App.css';
import '../styles/perfil.css'
import Foot from "../components/Foot";
import HeaderForos from "../components/HeaderForos";
import avatar4 from '../images/avatar4.jpg';
import {Link} from "react-router-dom";
import FIREBASE from '../firebase'

const Perfil = () => {
    return (
        <>
            <HeaderForos/>

            <div className="fondo-foros">
                <div align="center">
                    <img
                        alt="example"
                        src={avatar4} className="tam-imagen-perfil"
                    />
                    <p className="tam-titu"><strong>Perfil</strong></p>
                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Datos</strong></p>
                        <Card className="colorBaseB tamanio-cuadro-interno " bordered={true}>
                            <Row gutter={24}>
                                <Col xs={24} sm={24} md={18} lg={18} span={1}>
                                    <Row gutter={24}>
                                        <Col align="right" xs={24} sm={24} md={10} lg={10} span={1}>
                                            <p className="tam-titu2"><strong>Nombre:</strong></p>
                                        </Col>
                                        <Col xs={24} sm={24} md={10} lg={11} span={1}>
                                            <div className="div-datos-titulos-perfil">Eddy Hipo</div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col align="right" xs={24} sm={24} md={10} lg={10} span={1}>
                                            <p className="tam-titu2"><strong>Correo Electrónico:</strong></p>
                                        </Col>
                                        <Col xs={24} sm={24} md={10} lg={11} span={1}>
                                            <div className="div-datos-titulos-perfil">hipoeddy@gmail.com</div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col align="right" xs={24} sm={24} md={10} lg={10} span={1}>
                                            <p className="tam-titu2"><strong>Teléfono:</strong></p>
                                        </Col>
                                        <Col xs={24} sm={24} md={10} lg={11}span={1}>
                                            <div className="div-datos-titulos-perfil">0992722138</div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col align="right" xs={24} sm={24} md={10} lg={10} span={1}>
                                            <p className="tam-titu2"><strong>Dirección:</strong></p>
                                        </Col>
                                        <Col xs={24} sm={24} md={10} lg={11} span={1}>
                                            <div className="div-datos-titulos-perfil">La Ferroviaria</div>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col align="right" xs={24} sm={24} md={10} lg={10} span={1}>
                                            <p className="tam-titu2"><strong>Contraseña:</strong></p>
                                        </Col>
                                        <Col xs={24} sm={24} md={10} lg={11} span={1}>
                                            <div className="div-datos-titulos-perfil">1234</div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={24} sm={24} md={5} lg={5} span={1} align="center">
                                    <Row gutter={24}>
                                        <Col xs={24} sm={24} md={24} lg={24} span={1}>
                                            <Button key="2" type="primary" className="posicion-btns">
                                                <p>Actualizar Datos</p>
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row gutter={24}>
                                        <Col xs={24} sm={24} md={24} lg={24} span={1}>
                                            <Button key="1" type="primary" className="posicion-btns">
                                                <Link to="/ForosPrincipal">Regresar</Link>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </>
    );

}

export default Perfil;
