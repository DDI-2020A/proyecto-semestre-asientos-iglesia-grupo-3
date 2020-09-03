import React, {useState} from 'react';
import {Modal, Form, Input, Button, Card, Row, Col, Space, Divider, Tabs} from "antd";
import '../styles/registrarAsiento.css';

import Foot from "./Foot";
import FormRegistrarAsiento from "./FormRegistrarAsiento";

const { TabPane } = Tabs;

const RegistrarAsiento = () => {

    const [ ViewFormAsientoModalVisible, setViewFormAsientoModalVisible ] = useState( false );

    const handleOpenForm =() =>{
        setViewFormAsientoModalVisible(true);
    };


    return (
        <>
            <div className="site-card-border-less-wrapper fondo-registrar-asiento" align="center">
                <Card className="colorBaseA tamanio-cuadro"  bordered={true}>
                    <h2>Registrar Asiento</h2>
                    <Card className="colorBaseB tamanio-cuadro-interno "  bordered={true}>
                        <p>
                            Ingrese sus datos para asignarle un asiento para la ceremonia en la Iglesia X, según
                            su disponibilidad de horario
                        </p>
                        <div>
                            <Form
                                name="basic"
                                initialValues={{remember: true}}
                                onFinish={()=> handleOpenForm()}
                            >
                                <Divider dashed />
                            <Row gutter={16} align="center" >

                                <Col xs={24} sm={24} md={16} lg={16}  span={8}>

                                    <Form.Item
                                        name="cédula de usuario"
                                        label="Cédula / Pasaporte"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor complete el campo',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Ingrese su Cédula o Pasaporte" />
                                    </Form.Item>
                                    <Form.Item
                                        name="nombre de usuario"
                                        label="Nombre"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingrese su nombre',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Ingrese su nombre" />
                                    </Form.Item>
                                    <Form.Item
                                        name="telefono de usuario"
                                        label="Teléfono"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor ingrese su teléfono',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Ingrese su teléfono" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}  span={8} >
                                    <Space align="center padding-btn-registrar">

                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Registrar Asiento
                                        </Button>
                                    </Form.Item>
                                    </Space>
                                </Col>

                            </Row>
                        </Form>



                        </div>
                    </Card>
                </Card>
            </div>

            <Modal
                visible={ ViewFormAsientoModalVisible }
                width={900}
                onCancel={ () => setViewFormAsientoModalVisible( false ) }
            >
        <FormRegistrarAsiento />


                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab={<p>SALUDOS</p>} key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        <FormRegistrarAsiento />


                    </TabPane>
                </Tabs>

            </Modal>
            <Foot />

        </>
    );

}

export default RegistrarAsiento;