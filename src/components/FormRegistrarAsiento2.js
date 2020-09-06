import React from "react";
import {Button, Card, DatePicker, Divider, Form,Select, Space} from "antd";
import '../styles/registrarAsiento.css';

const FormRegistrarAsiento2 = () =>{


    const { Option, OptGroup } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }


    return (

        <>
            <div   align="center">
                <Card className="tamanio-formularios "  bordered={true}>
                    <p>
                        Elegir horario
                    </p>
                    <div>
                        <Form
                            name="registrar-asiento"
                            initialValues={{remember: true}}
                        >
                            <Form.Item name="ra-fecha" label="Seleccionar dia" >
                                <DatePicker />
                            </Form.Item>
                            <Form.Item name="ra-seleccionar-horario: " label="Seleccionar horario" >
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
                                    <Button type="primary" >
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

export default FormRegistrarAsiento2;