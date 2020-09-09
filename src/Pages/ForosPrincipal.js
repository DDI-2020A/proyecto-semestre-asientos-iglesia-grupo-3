import React, { useState, useEffect} from 'react';
import {Card, Col, Row, Input, Button, Table, Space} from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderForos from "../components/HeaderForos";
import {Link} from "react-router-dom";
import FIREBASE from "../firebase";


const ForosPrincipal = () => {

    const [dataForums, setDataForums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        const getDataComments  = async () => {
                FIREBASE.db.ref('forums').on('value', (snapshot) => {
                //console.log('snapshot', snapshot.val());
                const forumsData = [];
                snapshot.forEach( (data) => {
                    //  console.log('comment', data.val());
                    const forum = data.val();
                    const forumId = data.key;

                    forumsData.push({
                        key: forumId,
                        Titulo: forum.title,
                        Usuario: forum.name,
                        Fecha: forum.date
                    });
                });
                setDataForums(forumsData);
                setIsLoading(false);
            });
        };
        getDataComments();
    }, []);

    console.log('dataForums',dataForums);

    const { Search } = Input;

    const columns = [
        {
            title: 'Tema',
            dataIndex: 'Titulo',
            key: 'Titulo',
            render: text =>  <Link to={{
                pathname: '/Foro',
                state: { saludo: true }
            }}>
                {text}
            </Link>,
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
                            <Table dataSource={ dataForums } columns={ columns } loading={isLoading} />;
                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </>
    );
}

export default ForosPrincipal;