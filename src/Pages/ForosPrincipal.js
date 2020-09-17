import React, { useState, useEffect} from 'react';
import {Card, Input, Table} from 'antd';
import '../styles/App.css';
import '../styles/forosprincipal.css';
import Foot from "../components/Foot";
import HeaderForos from "../components/HeaderForos";
import {Link,useParams} from "react-router-dom";
import FIREBASE from "../firebase";


const ForosPrincipal = () => {

    const [uid, setUid] = useState(useParams());
   // const { uid } = useParams();
    console.log('pruebapasar',uid);

    const [dataListForums, setDataListForums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        const getDataListForums  = async () => {
                FIREBASE.db.ref('forums').on('value', (snapshot) => {
                //console.log('snapshot', snapshot.val());
                const listForumsData = [];
                snapshot.forEach( (data) => {
                    //  console.log('comment', data.val());
                    const forums = data.val();
                    const forumsId = data.key;

                    listForumsData.push({
                        key: forumsId,
                        Titulo: forums.title,
                        Usuario: forums.name,
                        Fecha: forums.date,
                    });
                });
                setDataListForums(listForumsData);
                setIsLoading(false);
            });
        };
        getDataListForums();
    }, []);

    console.log('dataForums',dataListForums);

    const { Search } = Input;

    const columns = [
        {
            title: 'Tema',
            dataIndex: 'Titulo',
            key: 'Titulo',
            render: (text, foro) =>  <Link to={{
                pathname: `/Foro/${foro.key}`
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
            <HeaderForos user = {uid}/>

            <div className="fondo-foros">
                <div align="center">
                    <p className="tam-titu"><strong>Foros</strong></p>
                    <Search className="tam-buscador" placeholder="Buscar" onSearch={value => console.log(value)}
                            enterButton/>
                    <Card className="colorBaseA tamanio-cuadro" bordered={true} align="left">
                        <p className="tam-titu2"><strong>Listado de Foros:</strong></p>
                        <Card className="colorBaseB internal-box-size " bordered={true} align="center">
                            <Table dataSource={ dataListForums } columns={ columns } loading={isLoading} />;
                        </Card>
                    </Card>
                </div>
            </div>
            <Foot/>
        </>
    );
}

export default ForosPrincipal;