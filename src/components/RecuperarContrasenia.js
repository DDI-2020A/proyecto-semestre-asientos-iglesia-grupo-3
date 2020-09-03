import React, {useState} from 'react';
import {Form, Input, Button, Card, Modal, Alert} from "antd";
import '../styles/login.css';
import '../styles/cuenta.css';
import Foot from "./Foot";
import {Link} from "react-router-dom";



const RecuperarContrasenia = () => {

    const [ ViewModalCod, setViewModalCod] = useState( false );

    const handleOpenModal =() =>{
        setViewModalCod(true);
    };
    return (
        <>
            <div className="site-card-border-less-wrapper fondo-login" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Card className="BaseB cuadro-interno "  bordered={false}>
                        <p>
                            Ingrese el correo con el que se registro
                        </p>
                        <div>
                            <Form
                                name="basic"
                                initialValues={{remember: true}}
                                onFinish={()=> handleOpenModal()}

                            >
                                <Form.Item
                                    label="Email"
                                    name="usermail"
                                    rules={[{required: true, message: 'Porfavor ingrese sus datos'}]}
                                >
                                    <Input/>
                                </Form.Item>
                                <p>Confirmar Correo</p>
                                    <Form.Item
                                        label="Email"
                                        name="usermail1"
                                        rules={[{required: true, message: 'Porfavor ingrese sus datos'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                            Aceptar
                                        </Button>
                                        <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                            <Link to="/Login">Cancelar</Link>
                                        </Button>
                                    </Form.Item>
                                </Form>
                        </div>
                    </Card>
                </Card>
            </div>
            <Modal
                title={"Código"}
                visible={ ViewModalCod}
                onCancel={ () => setViewModalCod( false ) }
                footer={null}
                width={500}
            >
                <Alert
                    message="Información"
                    description="Se ha enviado un código de seguridad al correo registrado"
                    type="info"
                    showIcon
                />
                <div className="modalLink"><Link to="/FormRecuperar">OK</Link></div>

            </Modal>
            <Foot/>

        </>
    );

}

export default RecuperarContrasenia;