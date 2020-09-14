import React, { useState, useEffect} from 'react';
import {Card, Input, Form, Button, message} from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderForos from "../components/HeaderForos";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import FIREBASE from "../firebase";

const CrearForos = () =>{
    const [ comments, setComments ] = useState( [] );


    const history = useHistory();
    const handleLogin = async (values) => {
        try {
            await FIREBASE.auth.signInWithEmailAndPassword(values.userMail, values.userPassword);
            history.push("/ForosPrincipal")
        } catch(error) {
            message.error(error.message)
        }
    }


  const [ setTodos ] = useState( [] );

const handleAddTask = () => {
    const task = document.querySelector( '#task' ).value;
    setTodos( prevState => [ ...prevState, task ] );
    document.querySelector( '#task' ).value = '';

};
    return (
        <>
            <HeaderForos/>

            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Crear Foro</strong></p>

                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">

                        <Card className="colorBaseB internal-box-size " bordered={true} align="center">
                            <Form name="nest-messages"  >
                                <Form.Item name={['user', 'text']} label="Titulo" >
                                    <Input id='task'/>
                                </Form.Item>
                                <Form.Item name={['user', 'introduction']} label="Comentario">
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item >
                                    <Button onClick={ handleAddTask } type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                        <Link to="/ForosPrincipal">Crear Foro</Link>
                                    </Button>
                                    <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                        <Link to="/MisForos">Cancelar</Link>
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