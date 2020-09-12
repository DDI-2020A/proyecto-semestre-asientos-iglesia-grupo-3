import React, {useEffect} from "react";
import moment from 'moment';
import {Button, Card, DatePicker, Form  } from "antd";
import '../styles/registrarAsiento.css';
import '../styles/App.css'



const FormRegisterSeat2 = (props) =>{


    const handleReturnData = (value ) =>{
        const day = document.querySelector('#register-seat_ra-date').value;
        const schedule = document.querySelector('#select-schedule').value;
        props.onUpdateValues2( day, schedule);
            value && true ?
                 props.onNext()
                :props.onPrev();
    }

    useEffect( () => {
        console.log( 'Datos usuario2', props.dataUser );
    }, [ props.dataUser ] );


    function disabledDate( date) {
        // Can not select days before today and today
        return (  date  < moment().startOf('day'));

    }

    return (

        <>
            <div   align="center">
                <Card className="form-sizes " bordered={true}>
                    <p>
                        Elegir horario
                    </p>
                    <div>
                        <Form
                            name="register-seat"
                            initialValues={{remember: true}}
                            onFinish={()=> handleReturnData(true)}
                        >
                            <Form.Item name="ra-date" label="Seleccionar dia"
                                       rules={[{ required: true, message: 'Por favor seleccionar un día válido' }]}>
                                <DatePicker
                                    format="YYYY-MM-DD "
                                    disabledDate={disabledDate }
                                    hasFeedback
                                />


                            </Form.Item>
                            <Form.Item
                                name="ra-select-schedule" label="Seleccionar horario"
                                hasFeedback
                                rules={[{ required: true, message: 'Por favor seleccionar un horario' }]}
                            >
                                        <div className="content-select">
                                                    <select
                                                        id="select-schedule">
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
                                    <Button style={{ margin: '0 8px' }} onClick={ () => handleReturnData( false )}>
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

export default FormRegisterSeat2;