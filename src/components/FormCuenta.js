import React from 'react';
import { Button} from "antd";
import '../styles/formcuenta.css';
import '../styles/cuenta.css';
import Foot from "./Foot";
import avatar1 from  '../images/avatar1.jpg';
import avatar2 from  '../images/avatar2.jpg';
import avatar3 from  '../images/avatar3.jpg';
import avatar4 from  '../images/avatar4.jpg';
import avatar5 from  '../images/avatar5.jpg';
import avatar6 from  '../images/avatar6.jpg';
import avatar7 from  '../images/avatar7.jpg';
import avatar8 from  '../images/avatar8.jpg';
import { Row, Col , Card} from 'antd';
import Divider from "antd/es/divider";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import Avatar from "antd/es/avatar";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import {Link} from "react-router-dom";


const FormCuenta = () => {
    return (
        <>
            <div className=" fondo-cuenta" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Row align={'middle'}>
                        <Col span={20}>
                            <Divider orientation="left">Elegir un avatar</Divider>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col className="gutter-row" span={6}>
                                    <Card className="cardimage"
                                        cover={
                                            <img
                                                style={{ width: '80%', height: '100%', }}
                                                alt="example"
                                                src={avatar1}
                                            />
                                        }
                                    >
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Card className="cardimage"
                                        cover={
                                            <img
                                                style={{ width: '80%', height: '100%', }}
                                                alt="example"
                                                src={avatar2}
                                            />
                                        }
                                    >
                                    </Card>
                                </Col>
                                <Col  span={6}>
                                    <Card className="cardimage"
                                        cover={
                                            <img
                                                style={{ width: '80%', height: '100%', }}
                                                alt="example"
                                                src={avatar3}
                                            />
                                        }
                                    >
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <Card className="cardimage"
                                        cover={
                                            <img
                                                style={{ width: '80%', height: '100%', }}
                                                alt="example"
                                                src={avatar4}
                                            />
                                        }
                                    >
                                    </Card>
                                </Col>
                            </Row>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col className="gutter-row" span={6}>
                                    <Card className="cardimage"
                                        cover={
                                            <img
                                                style={{ width: '80%', height: '100%', }}
                                                alt="example"
                                                src={avatar5}
                                            />
                                        }
                                    >
                                    </Card>
                                </Col>
                                <Col  span={6}>
                                    <Card className="cardimage"
                                        cover={
                                            <img
                                                style={{ width: '80%', height: '100%', }}
                                                alt="example"
                                                src={avatar6}
                                            />
                                        }
                                    >
                                    </Card>
                                </Col>
                                <Col  span={6}>
                                    <Card className="cardimage"
                                        cover={
                                            <img
                                                style={{ width: '80%', height: '100%', }}
                                                alt="example"
                                                src={avatar7}
                                            />
                                        }
                                    >
                                    </Card>
                                </Col>
                                <Col  span={6}>
                                    <Card className="cardimage"
                                        cover={
                                            <img
                                                style={{ width: '80%', height: '100%', }}
                                                alt="example"
                                                src={avatar8}
                                            />
                                        }
                                    >
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col align={'middle'} span={24}><Link to="/FormAvatar"><RightOutlined /></Link></Col>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <Avatar shape="square" size={104} icon={<UserOutlined />} />
                            <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                Aceptar
                            </Button>
                            <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                Cancelar
                            </Button>
                        </Col>
                    </Row>
                    </Card>

            </div>
            <Foot/>
        </>
    );
}
export default FormCuenta;