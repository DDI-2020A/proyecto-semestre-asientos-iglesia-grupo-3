import React, {useEffect, useState} from "react";
import  {Button, Card, Col, Form, Input,  Row } from "antd";
import '../styles/registrarAsiento.css';


const FormRegisterSeat1 = (props) =>{

    const [ dataUser, setDataUser ] = useState( props.dataUser );

    useEffect( () => {
        console.log( 'Datos usuario', props.dataUser );
    }, [ props.dataUser ] );


    const handleReturnData = () =>{
        const nameUser = document.querySelector('#ra-name-user').value;
        const identificationCardUser = document.querySelector('#ra-identification-card').value;
        const phoneUser = document.querySelector('#ra-phone-user').value;
        props.onUpdateValues( nameUser, phoneUser, identificationCardUser);
        props.onNext();
    }

    return (

        <>

            <div   align="center">
                <Card className="form-sizes " bordered={true}>
                    <Form
                        name="register-seat"
                        initialValues={{remember: true}}

                    >
                        <Row gutter={16} align="center" >

                            <Col xs={24} sm={24} md={16} lg={16}  span={8}>

                                <Form.Item
                                    name="ra-identification-card"
                                    label="Cédula / Pasaporte"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor complete el campo',
                                        },
                                    ]}
                                >
                                    {
                                        dataUser !== null ?
                                            <Input  defaultValue={ dataUser.CedulaPasUsuario} id="ra-identification-card" placeholder="Ingrese su Cédula o Pasaporte" />
                                            :
                                            <Input  id="ra-identification-card" placeholder="Ingrese su Cédula o Pasaporte" />
                                    }
                                    </Form.Item>
                                <Form.Item
                                    name="ra-name-user"
                                    label="Nombre"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingrese su nombre',
                                        },
                                    ]}
                                >
                                    {
                                        dataUser !== null ?
                                            <Input defaultValue={ dataUser.nombreUsuario } id="ra-name-user" placeholder="Ingrese su nombre" />
                                            :
                                            <Input id="ra-name-user" placeholder="Ingrese su nombre" />
                                    }



                                </Form.Item>
                                <Form.Item
                                    name="ra-phone-user"
                                    label="Teléfono"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Por favor ingrese su teléfono',
                                        },

                                    ]}
                                >

                                    {
                                        dataUser !== null ?
                                            <Input  defaultValue={ dataUser.telefonoUsuario}  id="ra-phone-user" placeholder="Ingrese su teléfono" />
                                            :
                                            <Input id="ra-phone-user" placeholder="Ingrese su teléfono" />
                                    }


                                </Form.Item>
                            </Col>
                        </Row>


                        {props.current < 3 && (
                            <Form.Item >
                                <Button type="primary" htmlType="submit" onClick={handleReturnData}>
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

export default FormRegisterSeat1;