
import React, { useState, useEffect} from 'react';

import { Button, PageHeader} from 'antd';
import { Link} from "react-router-dom";
import avatar4 from  '../images/avatar4.jpg';
import '../styles/headerforos.css';
import FIREBASE from "../firebase";

const HeaderForos = ( { uid } ) => {

    //const [userUid, setUserUid] = useState( user.uid );
    console.log('uid del usuario pasado a headerforos. Varable useestate:', uid);

    return (
        <div className='header2'>
            <PageHeader
                title='Un Lugar Juntos'
                extra={[
                    <Button key="1" type="primary">
                        <Link to={{pathname: `/misforos/${uid}`}}>
                            <p>Mis Foros</p>
                        </Link>
                    </Button>,
                    <Button key="2" type="primary">
                        <Link to= {{pathname: `/crearforos/${uid}`}}>
                            <p>Crear Foro</p>
                        </Link>
                    </Button>,
                    <Button key="3" type="primary">
                        <Link to={{
                            pathname: `/perfil/${uid}`
                        }}>
                            <p className="tam-text">Perfil
                                <img
                                    alt="example"
                                    src={avatar4} className="tam-imagen-btn-perfil"
                                /></p>
                        </Link>
                    </Button>,
                    <Button key="4" type="danger" onClick={()=>FIREBASE.auth.signOut()}>
                        Salir
                    </Button>,
                    <Button key="4" type="danger" >
                        <Link to="/">Salir momentaneo</Link>
                    </Button>
                ]}
            >
            </PageHeader>

        </div>

    );



}

export default HeaderForos;






