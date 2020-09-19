import React from 'react';
import { Card} from "antd";
import '../styles/registrarAsiento.css';

import Foot from "../components/Foot";
import FormRegisterSeat from "../components/FormRegisterSeat";



const RegisterSeat = () => {

    return (
        <>
            <div className="site-card-border-less-wrapper background-register-seat" align="center">
                <Card className="colorBaseA big-card-size" bordered={true}>
                    <h2>Registrar Asiento</h2>
                    <Card className="colorBaseB internal-box-size " bordered={true}>
                        <p>
                            Ingrese sus datos para asignarle un asiento para la ceremonia en la Iglesia X, según
                            su disponibilidad de horario
                        </p>

                        <FormRegisterSeat />

                    </Card>
                </Card>
            </div>

            <Foot />

        </>
    );

}

export default RegisterSeat;