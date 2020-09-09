import React, {useEffect, useState} from "react";
import {Button, Card, Col, Divider, Form, Input, message, Row} from "antd";
import '../styles/registrarAsiento.css';
import {Link} from "react-router-dom";

const FormRegistrarAsiento2 = (props) =>{
    // eslint-disable-next-line
    const [ datosUsuario, setDatosUsuario ] = useState( props.datosUsuario );

    useEffect( () => {
        console.log( 'Datos usuario3', props.datosUsuario );
    }, [ props.datosUsuario ] );


    const handleDevolverDatos = (value) =>{
        const fila = document.querySelector('#ra-fila').value;
        const columna = document.querySelector('#ra-columna').value;
        props.onActualizarValores3(fila, columna);
// eslint-disable-next-line
        {
            value && true ?
                message.success('Se han registrado sus datos')
                :
                props.onPrev();
        }
    }

    return (

        <>
            {/*Ultima ventana Elegir asiento*/}

            <div  align="center">
                <Card className="tamanio-formularios "  bordered={true}>
                    <p>
                        Elegir posición de asiento
                    </p>
                    <div>
                        <Form
                            name="registrar-asiento"
                            initialValues={{remember: true}}
                        >
                            <Divider dashed />
                            <Row gutter={16} align="center" >

                                <Col xs={24} sm={24} md={12} lg={12}  span={8}>
                                    <Form.Item
                                        name="ra-fila "
                                        label="Fila "
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor elija una fila',
                                            },
                                        ]}
                                    >
                                        {
                                            datosUsuario.PuestoMisaUsuarioF !== null ?
                                                <Input  defaultValue={ datosUsuario.PuestoMisaUsuarioF} id="ra-fila" placeholder="Ingresar fila" />
                                                :
                                                <Input id="ra-fila" placeholder="Ingresar fila" />
                                        }
                                        
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12}  span={8} >
                                    <Form.Item
                                        name="ra-columna"
                                        label="Columna"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor elija una columna',
                                            },
                                        ]}
                                    >


                                        {
                                            datosUsuario.PuestoMisaUsuarioC !== null ?
                                                <Input defaultValue={ datosUsuario.PuestoMisaUsuarioC } id="ra-columna" placeholder="Ingresar columna" />
                                                :
                                                <Input id="ra-columna" placeholder="Ingresar columna" />
                                        }

                                    </Form.Item>
                                </Col>

                            </Row>

                            {props.current === 2 && (
                                <Form.Item >
                                    <Button type="primary" htmlType="submit"  onClick={()=> handleDevolverDatos(true)}>
                                        <Link to="/ConfirmarAsiento" > Registrar </Link>
                                    </Button>
                                </Form.Item >
                            )}
                            {props.current > 0 && (
                                <Form.Item >
                                    <Button style={{ margin: '0 8px' }} onClick={ ()=> handleDevolverDatos(false)}>
                                        Regresar
                                    </Button>
                                </Form.Item >
                            )}

                        </Form>
                    </div>
                </Card>
            </div>


        </>


    );
}

export default FormRegistrarAsiento2;

