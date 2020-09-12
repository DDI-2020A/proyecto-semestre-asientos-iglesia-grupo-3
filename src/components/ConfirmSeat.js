import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Descriptions, Divider, Row, Space, message} from "antd";
import {Link} from "react-router-dom";
import moment from "moment";
import FIREBASE from "../firebase";

const ConfirmSeat = (props) => {


    const [ dataUser, setDataUser] = useState( props.dataUser );
    const massDate = moment( (dataUser.dayMass + dataUser.scheduleMass ) , "YYYY-MM-DD h:mm:ss ").unix();
    const [ dataMasses, setDataMasses] = useState([]);
    const [ VerificationSeatUser, setVerificationSeatUser ] = useState( false );

    useEffect( () => {
        console.log( 'Datos usuario1', props.dataUser );
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
                        data: mass,
                    });
                });
                setDataMasses(massesData);

            });
        };
        getMassess();
    }, [ ]);

    const handleVerifyUserSeat = ( identificationCard) =>{
        console.log("entrada", identificationCard);
        console.log("Valores", dataMasses);
        let values = "NoRegistrado";
        values = dataMasses.filter( ( item, index ) => item.data.identificationCard  === identificationCard).map((item, i) =>{
                return "Registrado";
            }
        );

        console.log("usuarios", values);

        values == "Registrado" ?
            alert("usted ya ha registrado un asiento en este horario")
            :
            alert("Puede guardar sus datos");
            // handleSaveDataFirebase(); Comentado para no guardar los datos por el momento

    }


    const handleSaveDataFirebase = () =>{
            FIREBASE.db.ref('masses/' + massDate + '/'+ dataUser.seatMassUser ).set({
                name: dataUser.nameUser,
                phone: dataUser.phoneUser,
                identificationCard: dataUser.identificationCard,
            }, function(error) {
                if (error) {
                    message.error("No se ha podido registrar sus datos");
                } else {
                    message.success("Se han registrado sus datos");
                }
        });
    }



    return (
        <>

            <div   align="center">
                <Card className="form-sizes " bordered={true}>
                    <p>
                        Los datos registrados son:
                    </p>
                    <div>
                        <Divider dashed />
                        <Row gutter={16} align="center" >

                            <Col xs={24} sm={24} md={8} lg={8}  span={8}>
                                <div>
                                    <Descriptions
                                        column={{ xxl: 1, xl: 1, lg: 1 , md: 1, sm: 1, xs: 1 }}
                                    >
                                        <Descriptions.Item label="Nombre">
                                            { dataUser.nameUser }
                                        </Descriptions.Item>
                                        <Descriptions.Item label="cedula">
                                            { dataUser.identificationCard }
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Telefono">
                                            { dataUser.phoneUser }
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Horario">
                                            { dataUser.dayMass }
                                            { dataUser.scheduleMass}
                                        </Descriptions.Item>
                                        <Descriptions.Item label="Puesto">
                                            { dataUser.seatMassUser }
                                        </Descriptions.Item>
                                    </Descriptions>
                                </div>


                            </Col>
                            <Col xs={24} sm={24} md={16} lg={16}  span={8} >
                                <Space align="center padding-btn-registrar" >
                                    <p> imagen </p>

                                </Space>
                            </Col>

                            <Divider dashed />

                            <Col xs={24} sm={24} md={8} lg={8}  span={8} >
                                <Button type="primary" htmlType="submit" >
                                    <Link to="/RegisterSeat"> Cancelar </Link>
                                </Button>
                            </Col>


                            {props.current === 3 && (

                                <Button type="primary" htmlType="submit"
                                        onClick={ () => handleVerifyUserSeat( dataUser.identificationCard )  }
                                >
                                     Registrar
                                </Button>

                            )}
                            {props.current > 0 && (

                                <Button style={{ margin: '0 8px' }} onClick={ props.onPrev }>
                                    Regresar
                                </Button>

                            )}
                        </Row>



                    </div>


                </Card>
            </div>

        </>
    );

}

export default ConfirmSeat;