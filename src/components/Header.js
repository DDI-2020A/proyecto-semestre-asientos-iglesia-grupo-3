import React from 'react';
import {   Button , PageHeader } from 'antd';
const Header = () => {


    return(

    <div className='header'>
        <PageHeader
            title='Un lugar juntos'
            extra={ [

                <Button type="link" ghost>Inicio</Button>,
                <Button type="link" ghost>Sobre Nosotros</Button>,
                <Button type="link" ghost>Testimonios</Button>,
                <Button type="link" ghost>Equipo</Button>,
                <Button type="link" ghost>Contactanos</Button>,
                <Button key="2"> Log in </Button>,
                <Button key="1" type="primary">
                    Registrarse
                </Button>,
            ] }
        >


        </PageHeader>

    </div>

    )



}

export default Header;