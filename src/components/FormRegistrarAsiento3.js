import React, {useEffect, useState} from "react";
import {Button, Card, Col, Divider, Form, Input, message, Radio, Row} from "antd";
import '../styles/registrarAsiento.css';
import moment from 'moment';
import FIREBASE from "../firebase";

const seats={
    A1: "A1", A2: "A2", A3: "A3", A4: "A4", A5: "A5", A6: "A6", A7: "A7", A8: "A8", A9: "A9",
    A10: "A10",
    B1: "B1", B2: "B2", B3: "B3", B4: "B4", B5: "B5", B6: "B6", B7: "B7", B8: "B8", B9: "B9",
    B10: "B10",
    C1: "C1", C2: "C2", C3: "C3", C4: "C4", C5: "C5", C6: "C6", C7: "C7", C8: "C8", C9: "C9",
    C10: "C10",
    D1: "D1", D2: "D2", D3: "D3", D4: "D4", D5: "D5", D6: "D6", D7: "D7", D8: "D8", D9: "D9",
    D10: "D10",
    E1: "E1", E2: "E2", E3: "E3", E4: "E4", E5: "E5", E6: "E6", E7: "E7", E8: "E8", E9: "E9",
    E10: "E10",
};

const getSeats=( availableSeats)=> {
    const seatsOptions = [];
    let search = [];
    console.log("asientos disponibles", availableSeats);
    for (let seatkey in seats) {
            // search = availableSeats.filter(seat => seat.equals(seatkey)).map(filteredName => (
            //         { filteredName }
            // )) ;
            search = "E1";
        seatkey == search ?
        seatsOptions.push(
            {
                label: seatkey ,
                value: seatkey,
                disabled: true,
            }
            ):
            seatsOptions.push(
                {
                    label: seatkey ,
                    value: seatkey,
                    //disabled: true,
                }
            )
    }
    return seatsOptions;

}





const FormRegistrarAsiento2 = (props) =>{
    // eslint-disable-next-line
    const [ datosUsuario, setDatosUsuario ] = useState( props.datosUsuario );

    useEffect( () => {
        console.log( 'Datos usuario3', props.datosUsuario );
    }, [ props.datosUsuario ] );

    const massDate = moment( (datosUsuario.DiaMisa + datosUsuario.HorarioMisaUsuario) , "YYYY-MM-DD h:mm:ss ").unix();


    const [dataMasses, setDataMasses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        const getMassess  = async () => {
            FIREBASE.db.ref('masses/1234567890/').on('value', (snapshot) => {
                console.log('snapshot', snapshot.val());
                const massesData = [];
                snapshot.forEach( (data) => {
                    //  console.log('comment', data.val());
                    const mass = data.val();
                    const massId = data.key;

                    massesData.push({
                        key: massId,
                    });
                });
                setDataMasses(massesData);
                setIsLoading(false);
            });
        };
        getMassess();
    }, []);

    console.log('dataForums',dataMasses);





    const handleDevolverDatos = (value) =>{
        const fila = "fila";
        const columna = "columna";
        props.onActualizarValores3(fila, columna);

        {
            value && true ?
                props.onNext()
                :
                props.onPrev();
        }
    }

    return (

        <>
            {/*Ultima ventana Elegir asiento*/}

            <div  align="center">
                <Card className="tamanio-formularios "  bordered={true}>

                    <p> Usted ha seleccionado la siguiente fecha {datosUsuario.DiaMisa} en el siguiente horario {datosUsuario.HorarioMisaUsuario} </p>
                    <p> El timestamp es  {massDate}  </p>

                    <div>
                        <Form
                            name="registrar-asiento"
                            initialValues={{remember: true}}
                        >

                            <Row align={'middle'}>
                                <Col span={24}>
                                    <Divider orientation="center">Elegir posición según disponibilidad</Divider>
                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col span={24} >
                                            <Radio.Group  options={ getSeats( dataMasses)}
                                                          optionType='button'/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            {props.current < 3 && (
                                <Form.Item >
                                    <Button type="primary" htmlType="submit"  onClick={()=> handleDevolverDatos(true)}>
                                        Siguiente
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

