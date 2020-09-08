import React, {useEffect, useState} from "react";
import {Button, Card, DatePicker, Form, Select } from "antd";
import '../styles/registrarAsiento.css';


const FormRegistrarAsiento2 = (props) =>{

    const { Option, OptGroup } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const handleDevolverDatos = ( value ) =>{
        const dia = "dia";
        const horario = "horario";
        props.onActualizarValores2(dia, horario);
        {
            value && true ?
                 props.onNext()
                :props.onPrev();
        }



    }

    useEffect( () => {
        console.log( 'Datos usuario2', props.datosUsuario );
    }, [ props.datosUsuario ] );

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
                                    <OptGroup  label="Horarios Disponibles">
                                        <Option value="7">7:00 - 9:00</Option>
                                        <Option value="10">10:00 - 12:00</Option>
                                        <Option value="14">14:00 - 16:00</Option>
                                        <Option value="18">18:00 - 20:00</Option>
                                    </OptGroup>

                                </Select>
                            </Form.Item>


                            {props.current < 2 && (
                                <Form.Item >
                                    <Button type="primary" htmlType="submit" onClick={ () => handleDevolverDatos( true )} >
                                        Siguiente
                                    </Button>
                                </Form.Item>
                            )}
                            {props.current > 0 && (

                                <Form.Item >
                                    <Button style={{ margin: '0 8px' }} onClick={ () => handleDevolverDatos( false )}>
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