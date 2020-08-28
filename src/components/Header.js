import React from 'react';
import { Button, PageHeader } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const Header = () => {

    return (


        <div className='header'>
            <PageHeader
                title='Un lugar juntos'
                extra={[
                    <a href="#id-ini"><Button type="link" ghost><Link to="/">Inicio</Link></Button></a>,
                    <a href="#id-about"><Button type="link" ghost>Sobre Nosotros</Button></a>,
                    <a href="#id-testimonio"><Button type="link" ghost>Testimonios</Button></a>,
                    <a href="#id-equipo"><Button type="link" ghost>Equipo</Button></a>,
                    <a href="#id-contact"><Button type="link" ghost>Contáctanos</Button></a>,

                    <Button key="2">
                        <Link to="/Login">Login</Link>
                    </Button>,
                    <Button key="1" type="primary">

                        <Link to="/Cuenta">Registrarse</Link>

                    </Button>,
                ]}
            >

            </PageHeader>

        </div>

    );



}

export default Header;

/*     const [numPag, setNumPag] = useState (props.numPag);

    useEffect(() => {
            setNumPag(props.numPag)
        }
    ), [numPag];*/





