import React, { useState, useEffect} from 'react';
import {Card, Col, Row, Input, Button, Table} from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderForos from "../components/HeaderForos";
import {Link} from "react-router-dom";
import FIREBASE from "../firebase";


const ForosPrincipal = () => {

    const [ comments, setComments ] = useState( [] );
    const [dataComments, setDataComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [nombreUsuario, setNombreUsuario] = useState("");

    useEffect( () => {
        const getDataComments  = async () => {
            FIREBASE.db.ref('Foros').on('value', (snapshot) => {
                console.log('snapshot', snapshot.val());
                const commentsData = [];
                snapshot.forEach( (data) => {
                    //  console.log('comment', data.val());
                    const comment = data.val();
                    const commentId = data.key;

                    let idUsuario = "";
                    FIREBASE.db.ref('Login/' + comment.Usuario).on('value', (snapshot) =>{
                        const nombreUsu = snapshot.val();
                        idUsuario = nombreUsu.Nombre;
                        setNombreUsuario(idUsuario);
                        console.log('Nomrbeusuarioa:', idUsuario );

                        console.log('NomrbeusuarioUseEfecta: ', nombreUsuario);

                    });


                    commentsData.push({
                        key: commentId,
                        Titulo: comment.Titulo,
                        Usuario: nombreUsuario,
                        Fecha: comment.Fecha
                    });
                });
                console.log('commentsData', commentsData);
                setDataComments(commentsData);
                setIsLoading(false);
            });
        };
        getDataComments();
    }, []);

    useEffect( () => {
        const getComments = async() => {
            const dataComments = await fetch( `https://run.mocky.io/v3/160b5ee4-3da0-4d86-80cd-5253856fa269` );
            const jsonComments = await dataComments.json();
            console.log( 'user', jsonComments );

            setComments( jsonComments );
        };
        getComments();

    },[] );

    const { Search } = Input;

    const columns = [
        {
            title: 'Tema',
            dataIndex: 'Titulo',
            key: 'Titulo',
        },
        {
            title: 'Autor',
            dataIndex: 'Usuario',
            key: 'Usuario',
        },
        {
            title: 'Fecha',
            dataIndex: 'Fecha',
            key: 'Fecha',
        },
    ];


    return (
        <>
            <HeaderForos/>

            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Foros</strong></p>
                    <Search className="tam-buscador" placeholder="Buscar" onSearch={value => console.log(value)}
                            enterButton/>
                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Listado de Foros:</strong></p>
                        <Card className="colorBaseB tamanio-cuadro-interno " bordered={true} align="center">
                            <Row gutter={16}>
                                <Col align="center" xs={24} sm={24} md={13} lg={13} span={1}>
                                    <p className="tam-titu2"><strong>Tema</strong></p>
                                </Col>
                                <Col align="center" xs={24} sm={24} md={6} lg={6} span={1}>
                                    <p className="tam-titu2"><strong>Autor</strong></p>
                                </Col>
                                <Col align="center" xs={24} sm={24} md={5} lg={5} span={1}>
                                    <p className="tam-titu2"><strong>Fecha</strong></p>
                                </Col>
                            </Row>
                            {
                                comments && comments.Foros
                                    ? comments.Foros.map((comment, index) => {
                                        return (
                                            <Row gutter={16} align="center">
                                                <Col xs={1} sm={1} md={1} lg={1} span={1}>
                                                    <div className="div-datos-num"><strong>{index + 1}.-</strong></div>
                                                </Col>
                                                <Col xs={24} sm={24} md={10} lg={12} span={1}>
                                                    <Button key="4" className="div-datos-num">
                                                        <Link to="/Foro">
                                                            <div className="div-datos-titulos">
                                                                <strong>{comment.Titulo}</strong>
                                                            </div>
                                                        </Link>
                                                    </Button>
                                                </Col>
                                                <Col xs={24} sm={24} md={8} lg={6} span={1}>
                                                    <div className="div-datos-titulos">
                                                        <strong>{comment.Usuario.Nombre}</strong></div>
                                                </Col>
                                                <Col xs={24} sm={24} md={6} lg={5} span={1}>
                                                    <div className="div-datos-titulos"><strong>{comment.Fecha}</strong>
                                                    </div>
                                                </Col>
                                            </Row>
                                        );
                                    })
                                    : 'Cargando'
                            }
                            <Table dataSource={ dataComments } columns={ columns } loading={isLoading} />;
                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </>
    );
}

export default ForosPrincipal;