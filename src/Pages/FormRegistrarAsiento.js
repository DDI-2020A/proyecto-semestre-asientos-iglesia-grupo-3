import {Tabs, Steps, Button, message, Col, Space, Form, Row} from "antd";
import React, {useState} from "react";
import '../styles/registrarAsiento.css';
import FormRegistrarAsiento3 from "../components/FormRegistrarAsiento3";
import FormRegistrarAsiento1 from "../components/FormRegistrarAsiento1";
import FormRegistrarAsiento2 from "../components/FormRegistrarAsiento2";
import {Link} from "react-router-dom";

const { TabPane } = Tabs;

const { Step } = Steps;



const FormRegistrarAsiento = () => {

  const [current, SetCurrent] = useState(0);

    const steps = [
        {
            title: 'Datos de usuario',
            content: <FormRegistrarAsiento1 current = {current}/> ,
        },
        {
            title: 'Seleccionar Horario',
            content: <FormRegistrarAsiento2 current = {current}/>,
        },
        {
            title: 'Seleccionar puesto',
            content: <FormRegistrarAsiento3 current = {current}/>,
        },
    ];

    const handleNext= () => {
       SetCurrent( current + 1);
    }

    const handlePrev = () => {
        SetCurrent(current - 1);
    }

    return (

        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < 2 && (
                    <Form.Item >
                        <Button type="primary" htmlType="submit" onClick={() => handleNext()}>
                            Siguiente
                        </Button>
                    </Form.Item>
                )}
                {current === 2 && (
                    <Form.Item >
                        <Button type="primary" htmlType="submit"  onClick={() => message.success('Se han registrado sus datos')}>
                            <Link to="/ConfirmarAsiento"> Registrar </Link>
                        </Button>
                    </Form.Item >
                )}
                {current > 0 && (

                    <Form.Item >
                        <Button style={{ margin: '0 8px' }} onClick={() => handlePrev()}>
                            Regresar
                        </Button>
                    </Form.Item >
                )}
            </div>


    </>


    );

}

export default FormRegistrarAsiento;

