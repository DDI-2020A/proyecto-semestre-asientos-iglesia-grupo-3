import React, {useState} from 'react';
import {Modal, Form, Input, Button, Card, Row, Col, Space, Divider, Tabs} from "antd";
import '../styles/registrarAsiento.css';

import Foot from "./Foot";
import FormRegistrarAsiento from "./FormRegistrarAsiento";

const { TabPane } = Tabs;

const RegistrarAsiento = () => {



    return (
        <>
            <div className="site-card-border-less-wrapper fondo-registrar-asiento" align="center">
                <Card className="colorBaseA tamanio-card-grande"  bordered={true}>
                    <h2>Registrar Asiento</h2>
                    <Card className="colorBaseB tamanio-cuadro-interno "  bordered={true}>
                        <p>
                            Ingrese sus datos para asignarle un asiento para la ceremonia en la Iglesia X, según
                            su disponibilidad de horario
                        </p>

                        <FormRegistrarAsiento />


                    </Card>
                </Card>
            </div>


            <Foot />

        </>
    );

}

export default RegistrarAsiento;