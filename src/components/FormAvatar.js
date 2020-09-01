import React from 'react';
import { Button} from "antd";
import '../styles/formcuenta.css';
import '../styles/cuenta.css';
import Foot from "./Foot";
import avatar9 from  '../images/avatar9.jpg';
import avatar10 from  '../images/avatar10.jpg';
import avatar11 from  '../images/avatar11.jpg';
import avatar12 from  '../images/avatar12.jpg';
import avatar13 from  '../images/avatar13.jpg';
import avatar14 from  '../images/avatar14.jpg';
import avatar15 from  '../images/avatar15.jpg';
import avatar16 from  '../images/avatar16.jpg';
import { Row, Col , Card} from 'antd';
import Divider from "antd/es/divider";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import Avatar from "antd/es/avatar";
import LeftOutlined from "@ant-design/icons/lib/icons/LeftOutlined";
import {Link} from "react-router-dom";


const FormAvatar = () => {
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
                                                  src={avatar9}
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
                                                  src={avatar10}
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
                                                  src={avatar11}
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
                                                  src={avatar12}
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
                                                  src={avatar13}
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
                                                  src={avatar14}
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
                                                  src={avatar15}
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
                                                  src={avatar16}
                                              />
                                          }
                                    >
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col align={'middle'} span={24}><Link to="/FormCuenta"><LeftOutlined /></Link></Col>
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
export default FormAvatar;