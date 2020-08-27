import React from 'react';
import { Layout } from 'antd';
import Descriptions from "antd/es/descriptions";
import {WhatsAppOutlined, FacebookOutlined,TwitterOutlined,GooglePlusOutlined } from '@ant-design/icons'
const { Footer} = Layout;

const Foot = ( ) => {
    return (
        <>
            <Footer  style={{ textAlign: 'center', paddingTop:15, paddingBottom:10,}}  >
                <Descriptions layout="vertical">
                    <Descriptions.Item label="Contactanos" >0969045324<WhatsAppOutlined style={{width:25, height:25}}/></Descriptions.Item>
                    <Descriptions.Item label="Redes Sociales"><FacebookOutlined style={{width:25, height:25}} /><TwitterOutlined style={{width:25, height:25}} /><GooglePlusOutlined style={{width:25, height:25}} /></Descriptions.Item>
                    <Descriptions.Item label="Direccion ">Hangzhou, Zhejiang</Descriptions.Item>
                </Descriptions>
            </Footer>
            </>
    );
};
export default Foot