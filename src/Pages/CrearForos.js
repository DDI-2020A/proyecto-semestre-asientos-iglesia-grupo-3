import React, { useState, useEffect} from 'react';
import {Card, Input, Form, Button, message} from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderForos from "../components/HeaderForos";
import {Link, useHistory, useParams} from "react-router-dom";
import FIREBASE from "../firebase";

const CrearForos = () =>{
    const history=useHistory();
    const { uid } = useParams();
    console.log('pasar a crear foro',uid);
    const [userData,setUserData]=useState(null);
    console.log('uid pasado a perfil: ',uid);

    useEffect( () => {
        const getDataForum  = async () => {
            await FIREBASE.db.ref(`users/${ uid }`).on('value', (snapshot) => {
                console.log('snapshot', snapshot.val());
                const user=snapshot.val();
                const dataUser = {key: uid,
                    name: user.name,
                };
                console.log('userdata', dataUser);
                setUserData(dataUser);
            });
        };
        getDataForum();
    }, []);
    const handleAddForum= async ()=>{
        try{
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            await FIREBASE.db.ref(`forums/`).push({
                date:date,
                message:document.querySelector('#text').value,
                name: userData.name,
                title:document.querySelector('#title').value,
                userId:uid,
            });
            message.success('Foro creado')
            history.push(`/forosprincipal/${uid}`)
        }catch (error) {
            message.error(error.message)
        }


    }
    return (
        <>
            <HeaderForos uid={uid}/>

            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Crear Foro</strong></p>

                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">

                        <Card className="colorBaseB internal-box-size " bordered={true} align="center">
                            <Form name="nest-messages"  >
                                <Form.Item name={['user', 'text']} label="Titulo" >
                                    <Input id='title'/>
                                </Form.Item>
                                <Form.Item name={['user', 'introduction']} label="Comentario">
                                    <Input.TextArea id='text'/>
                                </Form.Item>
                                <Form.Item >
                                    <Button onClick={ handleAddForum } type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                        Crear Foro
                                    </Button>
                                    <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit" >
                                        <Link to={{
                                            pathname: `/misforos/${uid}`
                                        }}>Regresar</Link>
                                    </Button>
                                </Form.Item>
                            </Form>

                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </>
    );
}
export default CrearForos;