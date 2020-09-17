import React, {useEffect, useState} from 'react';
import {Card, Col, Row, Button, Modal, Form, Input, message} from 'antd';
import { useParams } from "react-router-dom";
import '../styles/App.css';
import '../styles/perfil.css'
import Foot from "../components/Foot";
import HeaderForos from "../components/HeaderForos";
import avatar4 from '../images/avatar4.jpg';
import {Link} from "react-router-dom";
import FIREBASE from "../firebase";
import UserAvatar, {avatars} from "../components/UserAvatar";

const ActualizarPerfil = () => {

    const { userUid } = useParams();
    console.log('uid pasado a actualiar perfil: ',userUid);

    const [showModal, setShowModal] = useState(false);
    const [dataProfile, setDataProfile] = useState(null);


    useEffect( () => {
        const getDataProfile  = async () => {
            FIREBASE.db.ref(`users/${ userUid }`).on('value', (snapshot) => {
                console.log('snapshot', snapshot.val());
                const profile = snapshot.val();
                const profileId = snapshot.key;
                const profileData = {key: profileId,
                    address: profile.address,
                    email: profile.email,
                    name: profile.name,
                    phone:profile.phone,
                    avatar:profile.avatar
                };
                console.log('profileData', profileData);
                setDataProfile(profileData);

            });
        };
        getDataProfile();
    }, [])

    const showAvatars = () => {
        setShowModal(true);
    }

    const cancelAvatars = () => {
        setShowModal(false);
    }

    const onFinish = async (values) => {
        console.log('valores pasados al click perfil ', values);
        console.log('id usuaruip perfil ', userUid);
        await FIREBASE.db.ref(`users/${ userUid }`).set({
            address: values.address,
            name: values.name,
            phone: values.phone,
            email: dataProfile.email,
            avatar: dataProfile.avatar
        });
        message.success('Los datos del perfil se actualizaron corectamente');
    }


    //console.log('dataprofile', dataProfile);

    return (
        <>
            <HeaderForos user={userUid}/>
            <div className="fondo-foros">
                {
                    dataProfile
                    ? <div align="center">
                        <p className="tam-titu"><strong>Actualizar Perfil</strong></p>
                        <img
                            alt="example"
                            src={avatars[dataProfile.avatar]} className="tam-imagen-perfil"
                        />
                        <div><Button type="primary" onClick={showAvatars}>Cambiar Avatar</Button></div>
                        <Modal
                            title="Basic Modal"
                            visible={showModal}
                            onOk={cancelAvatars}
                            onCancel={cancelAvatars}
                        >
                            <UserAvatar />
                        </Modal>
                        <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                            <p className="tam-titu2"><strong>Datos</strong></p>

                            <Card className="colorBaseB internal-box-size " bordered={true}>
                                <Form
                                    name="basic"
                                    initialValues={dataProfile}
                                    onFinish={onFinish}
                                    //onFinishFailed={onFinishFailed}
                                >
                                    <Form.Item
                                        label="Nombre"
                                        name="name"
                                        rules={[{required: true, message: 'Porfavor ingrese el nombre!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Dirección"
                                        name="address"
                                        rules={[{required: true, message: 'Porfavor ingrese su dirección!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Teléfono"
                                        name="phone"
                                        rules={[{required: true, message: 'Porfavor ingrese su teléfono!'}]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item
                                        label="Contraseña"
                                        name="password"
                                        rules={[{required: true, message: 'Porfavor ingrese una contraseña!'}]}
                                    >
                                        <Input.Password/>
                                    </Form.Item>


                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Guardar Cambios
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <div align="center">
                                    <Button key="1" type="primary" className="posicion-btns">
                                        <Link to={{
                                            pathname: `/perfil/${userUid}`
                                        }}>Regresar</Link>
                                    </Button>
                                </div>
                            </Card>
                        </Card>
                    </div>
                    : 'Cargando datos...'
                }
            </div>
            <Foot/>
        </>
    );

}

export default ActualizarPerfil;
