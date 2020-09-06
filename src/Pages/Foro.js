import React from "react";
import {Card, Col, Input, Row, Comment, Tooltip, Button, Form} from "antd";
import '../styles/foro.css';
import HeaderForos from "../components/HeaderForos";
import Foot from "../components/Foot";
import moment from 'moment';
import avatar4 from '../images/avatar4.jpg';
import {Link} from "react-router-dom";

const Foro = () => {

    /*const { Search } = Input;*/

    const onFinish = values => {
        console.log(values);
    };

    return (
        <>
            <HeaderForos/>

            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Foros De la mano con dios</strong></p>
                    <div align="left">
                        <Card className="colorBaseB cuadro-datos " bordered={true} >
                            <Row gutter={24}>
                                <Col xs={24} sm={24} md={14} lg={16} span={1}>
                                    <Row gutter={24}>
                                        <Col  xs={24} sm={24} md={24} lg={24} span={1}>
                                            <p className="tam-titu2"><strong>Autor: Nombre del autor</strong></p>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={24} lg={24} span={1}>
                                            <p className="tam-titu2"><strong>Fecha: 22-03-2019</strong></p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col align="center" xs={24} sm={24} md={8} lg={8} span={1}>
                                    <img
                                        alt="example"
                                        src={avatar4} className="tam-imagen-dato-perfil"
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </div>


                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Reseña</strong></p>
                        <Card className="colorBaseB tamanio-cuadro-interno " bordered={true} align="left">
                            <h3> Mensaje de todito el texto que tiene el json</h3>
                        </Card>
                    </Card>

                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Comentarios</strong></p>
                        <Card className="colorBaseB tamanio-cuadro-interno " bordered={true} align="left">
                            <Comment
                                author={<h2>Autor 3</h2>}
                                avatar={
                                    <img
                                        alt="example"
                                        src={avatar4}
                                    />
                                }
                                content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality design
                                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                                        and efficiently.
                                    </p>
                                }
                                datetime={
                                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                        <h4>{moment().calendar()}</h4>
                                    </Tooltip>
                                }
                            />

                            <Comment
                                author={<h2>Autor 2</h2>}
                                avatar={
                                    <img
                                        alt="example"
                                        src={avatar4}
                                    />
                                }
                                content={
                                    <p>
                                        We supply a series of design principles, practical patterns and high quality design
                                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                                        and efficiently.
                                    </p>
                                }
                                datetime={
                                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                        <h4>{moment().calendar()}</h4>
                                    </Tooltip>
                                }
                            />

                        </Card>
                    </Card>

                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Agregar Comentario</strong></p>
                        <Card className="colorBaseB tamanio-cuadro-interno " bordered={true} align="left">
                            <Form  name="nest-messages" onFinish={onFinish} >
                                <Form.Item name={['user', 'introduction']}>
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Card>
                    <Button key="1" type="primary" className="posicion-btns">
                        <Link to="/ForosPrincipal">Regresar</Link>
                    </Button>
                </div>
            </div>
            <Foot/>
        </>
    );
}

export default Foro;