import React, { useState, useEffect} from 'react';
import {Card,Input, Form, Button} from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderForos from "../components/HeaderForos";
import {Link} from "react-router-dom";

const CrearForos = () =>{
    const [ comments, setComments ] = useState( [] );

    useEffect( () => {
        const getComments = async() => {
            const dataComments = await fetch( `https://run.mocky.io/v3/160b5ee4-3da0-4d86-80cd-5253856fa269` );
            const jsonComments = await dataComments.json();
            console.log( 'user', jsonComments );

            setComments( jsonComments );
        };
        getComments();

    },[] );
    // eslint-disable-next-line
  const { Search } = Input;

    return (
        <>
            <HeaderForos/>

            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Crear Foro</strong></p>

                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">

                        <Card className="colorBaseB tamanio-cuadro-interno " bordered={true} align="center">
                            <Form name="nest-messages"  >
                                <Form.Item name={['user', 'text']} label="Titulo" rules={[{ type: 'text' }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item name={['user', 'introduction']} label="Comentario">
                                    <Input.TextArea />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                        <Link to="/ForosPrincipal">Crear Foro</Link>
                                    </Button>
                                    <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                        <Link to="/MisForos">Cancelar</Link>
                                    </Button>
                                </Form.Item>
                            </Form>



                            { // eslint-disable-next-line
                                comments && comments.Foros // eslint-disable-next-line
                                    ? comments.Foros.map((comment, index) => {

                                    })
                                    : '.....'
                            }
                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </>
    );
}
export default CrearForos;