import React from 'react';
import { Button, PageHeader} from 'antd';
import { Link} from "react-router-dom";
import avatar4 from  '../images/avatar4.jpg';
import '../styles/headerforos.css';

const HeaderForos = () => {

    return (


        <div className='header2'>
           <PageHeader
                title='Un Lugar Juntos'
                extra={[

                    <Button key="1" type="primary">
                        <Link to="/MisForos">
                            <p>Mis Foros</p>
                        </Link>
                    </Button>,
                    <Button key="2" type="primary">
                        <Link to="/CrearForos">
                            <p>Crear Foro</p>
                        </Link>
                    </Button>,
                    <Button key="3" type="primary">
                        <Link to="/Perfil">
                            <p className="tam-text">Perfil
                                <img
                                    alt="example"
                                    src={avatar4} className="tam-imagen-btn-perfil"
                                /></p>
                        </Link>
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






