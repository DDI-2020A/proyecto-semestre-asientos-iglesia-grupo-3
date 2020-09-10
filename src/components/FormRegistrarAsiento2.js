import React, {useEffect} from "react";
import moment from 'moment';
import {Button, Card, DatePicker, Form, Select, Radio } from "antd";
import '../styles/registrarAsiento.css';
import '../styles/App.css'



const FormRegistrarAsiento2 = (props) =>{

    const { Option, OptGroup } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const handleDevolverDatos = ( value ) =>{
        const dia = document.querySelector('#registrar-asiento_ra-fecha').value;
        const horario = document.querySelector('#Select-prueba').value;

        props.onActualizarValores2(dia, horario); // eslint-disable-next-line
        {
            value && true ?
                 props.onNext()
                :props.onPrev();
        }



    }

    useEffect( () => {
        console.log( 'Datos usuario2', props.datosUsuario );
    }, [ props.datosUsuario ] );





    function disabledDate( date) {
        // Can not select days before today and today
        return (  date  < moment().startOf('day'));

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
                            onFinish={()=> handleDevolverDatos(true)}
                        >
                            <Form.Item name="ra-fecha" label="Seleccionar dia"
                                       rules={[{ required: true, message: 'Por favor seleccionar un día válido' }]}>
                                <DatePicker
                                    format="YYYY-MM-DD "
                                    disabledDate={disabledDate }
                                    hasFeedback
                                />


                            </Form.Item>
                            <Form.Item
                                name="ra-seleccionar-horario" label="Seleccionar horario"
                                hasFeedback
                                rules={[{ required: true, message: 'Por favor seleccionar un horario' }]}
                            >
                                        <div className="content-select">
                                                    <select
                                                        id="Select-prueba">
                                                        <option> </option>
                                                        <option value='7:00:00'>7:00 - 9:00</option>
                                                        <option value='10:00:00'>10:00 - 12:00</option>
                                                        <option value='14:00:00'>14:00 - 16:00</option>
                                                        <option value='18:00:00'>18:00 - 20:00</option>
                                                    </select>
                                                    <i></i>
                                                </div>
                            </Form.Item>

                            {props.current < 3 && (
                                <Form.Item >
                                    <Button type="primary" htmlType="submit"  >
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