import React, {useEffect, useState} from 'react';
import {Button, Card, Col, DatePicker, Descriptions, Divider, Form, Row, Select, Space} from "antd";
import Foot from "./Foot";
import {Link} from "react-router-dom";
import datosUsuario from "../Pages/FormRegistrarAsiento";

const ConfirmarAsiento = ( props) => {


    const [ datosUsuario, setDatosUsuario ] = useState( props.datosUsuario );

    useEffect( () => {
        console.log( 'Datos usuario1', props.datosUsuario );
    }, [ props.datosUsuario ] );
    return (
        <>

            <div   align="center">
                <Card className="tamanio-formularios "  bordered={true}>
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
                                        <Descriptions.Item label="Nombre">
                                            { datosUsuario.nombreUsuario  }
                                        </Descriptions.Item>
                                        <Descriptions.Item label="cedula">
                                            { datosUsuario.CedulaPasUsuario }
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Telefono">
                                            { datosUsuario.telefonoUsuario }
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Horario">
                                            { datosUsuario.DiaMisa }
                                            { datosUsuario.HorarioMisaUsuario}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Puesto">
                                            { datosUsuario.PuestoMisaUsuarioF + datosUsuario.PuestoMisaUsuarioC}
                                        </Descriptions.Item>
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


                            {props.current === 3 && (

                                <Button type="primary" htmlType="submit"  >
                                     Registrar
                                </Button>

                            )}
                            {props.current > 0 && (

                                <Button style={{ margin: '0 8px' }} onClick={ props.onPrev }>
                                    Regresar
                                </Button>

                            )}
                        </Row>



                    </div>


                </Card>
            </div>

        </>
    );

}

export default ConfirmarAsiento;