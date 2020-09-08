import React, {useEffect, useState} from "react";
import {Button, Card, Col, Form, Input,  Row } from "antd";
import '../styles/registrarAsiento.css';


const FormRegistrarAsiento1 = (props) =>{

    const [ datosUsuario, setDatosUsuario ] = useState( props.datosUsuario );

    useEffect( () => {
        console.log( 'Datos usuario1', props.datosUsuario );
    }, [ props.datosUsuario ] );



    const handleDevolverDatos = () =>{
        const nombreUsuario = document.querySelector('#ra-nombre-usuario').value;
        const cedulaUsuario = document.querySelector('#ra-cedula-pasaporte').value;
        const telefonoUsuario = document.querySelector('#ra-telefono-usuario').value;
        props.onActualizarValores(nombreUsuario, telefonoUsuario, cedulaUsuario);
        props.onNext();
    }

    return (

        <>

            <div   align="center">
                <Card className="tamanio-formularios "  bordered={true}>
                    <Form
                        name="registrar-asiento"
                        initialValues={{remember: true}}

                    >
                        <Row gutter={16} align="center" >

                            <Col xs={24} sm={24} md={16} lg={16}  span={8}>

                                <Form.Item
                                    name="ra-cedula-pasaporte"
                                    label="Cédula / Pasaporte"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor complete el campo',
                                        },
                                    ]}
                                >
                                    {
                                        datosUsuario !== null ?
                                            <Input  defaultValue={ datosUsuario.CedulaPasUsuario} id="ra-cedula-pasaporte" placeholder="Ingrese su Cédula o Pasaporte" />
                                            :
                                            <Input  id="ra-cedula-pasaporte" placeholder="Ingrese su Cédula o Pasaporte" />
                                    }
                                    </Form.Item>
                                <Form.Item
                                    name="ra-nombre-usuario"
                                    label="Nombre"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingrese su nombre',
                                        },
                                    ]}
                                >
                                    {
                                        datosUsuario !== null ?
                                            <Input defaultValue={ datosUsuario.nombreUsuario } id="ra-nombre-usuario" placeholder="Ingrese su nombre" />
                                            :
                                            <Input id="ra-nombre-usuario" placeholder="Ingrese su nombre" />
                                    }



                                </Form.Item>
                                <Form.Item
                                    name="ra-telefono-usuario"
                                    label="Teléfono"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingrese su teléfono',
                                        },

                                    ]}
                                >

                                    {
                                        datosUsuario !== null ?
                                            <Input  defaultValue={ datosUsuario.telefonoUsuario}  id="ra-telefono-usuario" placeholder="Ingrese su teléfono" />
                                            :
                                            <Input id="ra-telefono-usuario" placeholder="Ingrese su teléfono" />
                                    }

                                </Form.Item>
                            </Col>
                        </Row>


                        {props.current < 2 && (
                            <Form.Item >
                                <Button type="primary" htmlType="submit" onClick={handleDevolverDatos}>
                                    Siguiente
                                </Button>
                            </Form.Item>
                        )}

                    </Form>

                </Card>
            </div>

        </>


    );








}

export default FormRegistrarAsiento1;