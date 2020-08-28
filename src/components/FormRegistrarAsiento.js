import  { Select,DatePicker, Button, Card, Col, Divider, Form, Input, Row, Space} from "antd";
import React from "react";

const FormRegistrarAsiento = () => {

    const { Option, OptGroup } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (

        <>
             {/*Primera ventana Elegir asiento*/}

            <div  align="center">
                <Card className="tamanio-cuadro-interno "  bordered={true}>
                    <p>
                        Elegir posición de asiento
                    </p>
                    <div>
                        <Form
                            name="basic"
                            initialValues={{remember: true}}
                        >
                            <Divider dashed />
                            <Row gutter={16} align="center" >

                                <Col xs={24} sm={24} md={12} lg={12}  span={8}>
                                    <Form.Item
                                        name="Fila "
                                        label="Fila "
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor elija una fila',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Ingresar fila" />
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12}  span={8} >
                                    <Form.Item
                                        name="columna"
                                        label="Columna"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Por favor elija una columna',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Ingresar columna" />
                                    </Form.Item>
                                </Col>

                            </Row>

                            <Space align="center ">
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Aceptar
                                    </Button>
                                </Form.Item>
                            </Space>
                        </Form>
                    </div>
                </Card>
            </div>

        {/* Segunda ventana Elegir horario*/}

            <div  align="center">
                <Card className="tamanio-cuadro-interno "  bordered={true}>
                    <p>
                        Elegir horario
                    </p>
                    <div>
                        <Form
                            name="basic"
                            initialValues={{remember: true}}
                        >
                            <Form.Item name="fecha" label="Seleccionar dia" >
                                <DatePicker />
                            </Form.Item>
                            <Form.Item name="Seleccionar horario: " label="Seleccionar horario" >
                                <Select defaultValue="buscar horario" style={{ width: 200 }} onChange={handleChange}>
                                    <OptGroup label="Horarios Disponibles">
                                        <Option value="7">7:00 - 9:00</Option>
                                        <Option value="10">10:00 - 12:00</Option>
                                        <Option value="14">14:00 - 16:00</Option>
                                        <Option value="18">18:00 - 20:00</Option>
                                    </OptGroup>

                                </Select>
                            </Form.Item>

                            <Divider dashed />
                            <Space align="center ">
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Aceptar
                                    </Button>
                                </Form.Item>
                            </Space>
                        </Form>
                    </div>
                </Card>
            </div>



    </>


    );

}

export default FormRegistrarAsiento;