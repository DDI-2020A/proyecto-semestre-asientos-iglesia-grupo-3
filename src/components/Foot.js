import React from 'react';
import { Layout } from 'antd';
import Descriptions from "antd/es/descriptions";
import {WhatsAppOutlined, FacebookOutlined,TwitterOutlined} from '@ant-design/icons'
import ImgDirec from "../images/ImgDirec.jpg";
const { Footer} = Layout;

const Foot = ( ) => {
    return (
        <>
            <Footer  style={{ textAlign: 'center', paddingTop:15, paddingBottom:10,}}  >
                <Descriptions layout="vertical">
                    <Descriptions.Item label="Contáctanos" >0969045324<WhatsAppOutlined style={{width:25, height:25}}/></Descriptions.Item>
                    <Descriptions.Item label="Redes Sociales">
                        <a href="https://www.facebook.com/Iglesia-La-Luz-Del-Mundo-Batall%C3%B3n-Vuelta-Del-Barco-Guerrero-110498634102157"><FacebookOutlined style={{width:20, height:20}} /></a>
                        <a href="https://twitter.com/iglesialldm?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><TwitterOutlined style={{width:25, height:25}} /></a> </Descriptions.Item>
                    <Descriptions.Item label="Dirección ">
                        <a href="https://www.google.com.ec/maps/place/La+luz+del+mundo/@-0.3285672,-78.5537108,15z/data=!4m8!1m2!2m1!1siglesia+la+luz+del+mundo!3m4!1s0x91d5a2350cf78025:0xb59ef8a2f91564d8!8m2!3d-0.3285672!4d-78.5449561"
                           target="_blank">
                            <img
                                style={{ width: '20%', height: '20%' }}
                                alt="example"
                                src={ImgDirec}
                            />
                        </a>
                    </Descriptions.Item>
                </Descriptions>
            </Footer>
            </>
    );
};
export default Foot