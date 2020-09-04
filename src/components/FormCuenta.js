import React from 'react';
import { Button} from "antd";
import '../styles/formcuenta.css';
import '../styles/cuenta.css';
import Foot from "./Foot";
import { Row, Col , Card} from 'antd';
import Divider from "antd/es/divider";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import Avatar from "antd/es/avatar";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import {Link} from "react-router-dom";
import UserAvatar from "./UserAvatar";


const FormCuenta = () => {
    return (
        <>
            <div className=" fondo-cuenta" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Row align={'middle'}>
                        <Col span={20}>
                            <Divider orientation="left">Elegir un avatar</Divider>
                            <UserAvatar/>
                            <Row>
                                <Col align={'middle'} span={24}><Link to="/FormAvatar"><RightOutlined /></Link></Col>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <Avatar shape="square" size={104} icon={<UserOutlined />} />
                            <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                <Link to="/Login"> Aceptar</Link>
                            </Button>
                            <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                <Link to="/Login">Cancelar</Link>
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