import {Tabs} from "antd";
import React from "react";
import '../styles/registrarAsiento.css';
import FormRegistrarAsiento3 from "./FormRegistrarAsiento3";
import FormRegistrarAsiento1 from "./FormRegistrarAsiento1";
import FormRegistrarAsiento2 from "./FormRegistrarAsiento2";

const { TabPane } = Tabs;

const FormRegistrarAsiento = () => {

    /* const [keyTabs, setKeyTabs] = useState(1);

 const handleChangeKey = (numeroTab) => {
       console.log("Tab is changing to ",numeroTab);
       setKeyTabs( parseInt(numeroTab))
       console.log("keytabs es ",keyTabs);
   };*/

    return (

        <>
            <Tabs centered >
                <TabPane tab={
                    <div className="ant-steps-item ant-steps-item-wait tamanio-menu">
                        <div className="ant-steps-item-container" align="center">
                            <div className="ant-steps-item-icon">1</div>
                            <div className="ant-steps-item-content">
                                <div className="ant-steps-item-title">Datos de usuario</div>
                            </div>
                        </div>
                    </div>} key="1">
                    <FormRegistrarAsiento1 />
                </TabPane>

                <TabPane tab={
                    <div className="ant-steps-item ant-steps-item-wait tamanio-menu">
                        <div className="ant-steps-item-container">
                            <div className="ant-steps-item-tail"></div>
                            <div className="ant-steps-item-icon">2</div>
                            <div className="ant-steps-item-content">
                                <div className="ant-steps-item-title">Seleccionar horario</div>
                            </div>
                        </div>
                    </div>
                } key="2">

                    <FormRegistrarAsiento2 />
                </TabPane>

                <TabPane tab={
                    <div className="ant-steps-item ant-steps-item-wait tamanio-menu">
                        <div className="ant-steps-item-container">
                            <div className="ant-steps-item-tail"></div>
                            <div className="ant-steps-item-icon">3</div>
                            <div className="ant-steps-item-content">
                                <div className="ant-steps-item-title">Seleccionar puesto</div>
                            </div>
                        </div>
                    </div>
                } key="3">

                    <FormRegistrarAsiento3 />
                </TabPane>

            </Tabs>

    </>


    );

}

export default FormRegistrarAsiento;

