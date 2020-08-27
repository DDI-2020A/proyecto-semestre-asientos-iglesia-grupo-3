import React from 'react';
import { Button, PageHeader } from 'antd';

const Header = ( ) => {



    return(

        <div className='header'>
            <PageHeader
                title='Un lugar juntos'
                extra={ [
                    <a href="#id-ini"><Button type="link" ghost>Inicio</Button></a>,
                    <a href="#id-about"><Button type="link" ghost>Sobre Nosotros</Button></a>,
                    <a href="#id-testimonio"><Button type="link" ghost>Testimonios</Button></a>,
                    <a href="#id-equipo"><Button type="link" ghost>Equipo</Button></a>,
                    <a href="#id-contact"><Button type="link" ghost>Contáctanos</Button></a>,

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

/*     const [numPag, setNumPag] = useState (props.numPag);

    useEffect(() => {
            setNumPag(props.numPag)
        }
    ), [numPag];*/