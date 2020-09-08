import React from 'react';
import {Button} from "antd";
import '../styles/cuenta.css';
import Foot from "../components/Foot";
import { Row, Col , Card} from 'antd';
import Divider from "antd/es/divider";
import {Link} from "react-router-dom";
import UserAvatar from "../components/UserAvatar";


const FormCuenta = () => {
    return (
        <>
            <div className=" fondo-cuenta" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Row align={'middle'}>
                        <Col span={24}>
                            <Divider orientation="center">Elegir un avatar</Divider>
                            <UserAvatar/>
                        </Col>
                        <Divider orientation="center">
                            <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit" >
                                 <Link to="/Login">Aceptar</Link>
                            </Button>
                            <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                <Link to="/Login">Cancelar</Link>
                            </Button>
                        </Divider>

                    </Row>
                    </Card>

            </div>
            <Foot/>
        </>
    );
}
export default FormCuenta;