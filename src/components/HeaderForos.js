import React from 'react';
import { Button, PageHeader } from 'antd';
import { Link} from "react-router-dom";
import avatar4 from  '../images/avatar4.jpg';
import '../styles/headerforos.css';

const HeaderForos = () => {

    return (


        <div className='header'>
            <PageHeader
                title='Un Lugar Juntos'
                extra={[

                    <Button key="1" type="primary">
                        <p>Mis Foros</p>
                    </Button>,
                    <Button key="2" type="primary">
                        <p>Crear Foro</p>
                    </Button>,
                    <Button key="3" type="primary" >
                        <p className="tam-text">Perfil
                            <img
                                alt="example"
                                src={avatar4} className="tam-imagen-btn-perfil"
                            /></p>
                    </Button>,
                    <Button key="4" type="danger">
                        <Link to="/">Salir</Link>
                    </Button>,
                ]}
            >

            </PageHeader>

        </div>

    );



}

export default HeaderForos;






