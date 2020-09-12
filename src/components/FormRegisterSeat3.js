import React, {useEffect, useState} from "react";
import {Button, Card, Col, Divider, Form,  Radio, Row} from "antd";
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

const getSeats=( availableSeats )=> {
    const seatsOptions = [];
    let search = [];
    console.log("asientos disponibles", availableSeats);
    for (let seatkey in seats) {

        search = availableSeats.filter( ( item, index ) => item.key  === seatkey ).map((item, i) =>{
            return seatkey;
            }
        );

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





const FormRegisterSeat3 = (props) =>{

    const [ dataUser, setDataUSer] = useState( props.dataUser );
    const massDate = moment( (dataUser.dayMass + dataUser.scheduleMass) , "YYYY-MM-DD h:mm:ss ").unix();
    const [ dataMasses, setDataMasses] = useState([]);
    const [ positionSeat, setPositionSeat ] = useState(null);

    useEffect( () => {
        console.log( 'Datos usuario3', props.dataUser );
    }, [ props.dataUser ] );




    useEffect( () => {
        const getMassess  = async () => {
            FIREBASE.db.ref('masses/' + massDate + '/').on('value', (snapshot) => {
                console.log('snapshot', snapshot.val());
                const massesData = [];
                snapshot.forEach( (data) => {
                    const mass = data.val();
                    const massId = data.key;

                    massesData.push({
                        key: massId,
                    });
                });
                setDataMasses(massesData);

            });
        };
        getMassess();
    }, [ ]);


    const handleReturnData = (value ) =>{
        props.onUpdateValues3( positionSeat );
            value && true ?
                props.onNext()
                :
                props.onPrev();
    }

    const handleChooseSeat = (e) => {
        setPositionSeat(e.target.value);
    }


    return (
        <>
            <div  align="center">
                <Card className="form-sizes " bordered={true}>

                    <p> Usted ha seleccionado la siguiente fecha {dataUser.DiaMisa} en el siguiente horario {dataUser.HorarioMisaUsuario} </p>
                    <p> El timestamp es  {massDate}  </p>

                    <div>
                        <Form
                            name="register-seat"
                            initialValues={{remember: true}}
                        >

                            <Row align={'middle'}>
                                <Col span={24}>
                                    <Divider orientation="center">Elegir posición según disponibilidad</Divider>
                                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                        <Col span={24} >
                                            <Radio.Group  options={ getSeats( dataMasses)}
                                                          optionType='button'
                                                          onChange={ handleChooseSeat }/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            {props.current < 3 && (
                                <Form.Item >
                                    <Button type="primary" htmlType="submit"  onClick={()=> handleReturnData(true)}>
                                        Siguiente
                                    </Button>
                                </Form.Item >
                            )}
                            {props.current > 0 && (
                                <Form.Item >
                                    <Button style={{ margin: '0 8px' }} onClick={ ()=> handleReturnData(false)}>
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

export default FormRegisterSeat3;

