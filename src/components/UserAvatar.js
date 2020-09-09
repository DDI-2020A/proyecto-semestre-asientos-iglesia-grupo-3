import {Col, Row, Radio, Card, Button} from "antd";
import a1 from "../images/avatar1.jpg";
import a2 from "../images/avatar2.jpg";
import a3 from "../images/avatar3.jpg";
import a4 from "../images/avatar4.jpg";
import a5 from "../images/avatar5.jpg";
import a6 from "../images/avatar6.jpg";
import a7 from "../images/avatar7.jpg";
import a8 from "../images/avatar8.jpg";
import a9 from  '../images/avatar9.jpg';
import a10 from  '../images/avatar10.jpg';
import a11 from  '../images/avatar11.jpg';
import a12 from  '../images/avatar12.jpg';
import a13 from  '../images/avatar13.jpg';
import a14 from  '../images/avatar14.jpg';
import a15 from  '../images/avatar15.jpg';
import a16 from  '../images/avatar16.jpg';
import '../styles/formcuenta.css';
import React from "react";
import Divider from "antd/es/divider";
import {Link} from "react-router-dom";
import Foot from "./Foot";
const avatars={
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
};

const getAvatar=()=> {
    const avatarOptions = [];
    for (let avatarkey in avatars) {
        avatarOptions.push(
            {
                label: <img src={avatars[avatarkey]} alt='Imagen' height={100}/>,
                value: avatarkey
            }
        );
    }
    return avatarOptions;

}

const UserAvatar =()=>{

    return (
        <>
            <div className=" fondo-cuenta" align="center">
                <Card className="BaseA cuadro-grande"  bordered={false}>
                    <Row align={'middle'}>
                        <Col span={24}>
                            <Divider orientation="center">Elegir un avatar</Divider>
                            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                                <Col span={24} >
                                    <Radio.Group className='avatar-b' options={getAvatar()}
                                                 optionType='button'/>
                                </Col>
                            </Row>
                        </Col>
                        <Divider orientation="center">
                            <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit" >
                                <Link to="/Login">Aceptar</Link>
                            </Button>
                            <Button type="primary" style={{ margin: '0 8px' }} htmlType="submit">
                                <Link to="/Login">Cancelar</Link>
                            </Button>
                        </Divider>

                    </Row>
                </Card>

            </div>
            <Foot/>
        </>

);
}
export default UserAvatar;