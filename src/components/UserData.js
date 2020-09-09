import React, {useEffect, useState} from 'react';
import {Form, Input, Button} from "antd";
import '../styles/cuenta.css';

const UserData = (props) => {
    // eslint-disable-next-line
    const [ dataBill] = useState( props.dataBill );

    useEffect( () => {
        console.log( 'DataBill', props.dataBill );
    }, [ props.dataBill ] );



    const handleKeepData= () =>{
        const name = document.querySelector('#userName').value;
        const mail = document.querySelector('#userMail').value;
        const phone = document.querySelector('#userPhone').value;
        const address=document.querySelector('#userAddres').value;
        props.onUpdateValues(name,mail,phone,address);
        props.onNext();
    }
    return(
        <>
            <div >
                <Form
                    name="basic"
                    //onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Email"
                        name="userMail"
                        rules={[{required: true, message: 'Porfavor ingrese su correo!'},
                            {
                                type:"email",
                                message: "Ingresa un correo valido"}]}
                    >
                        {
                            dataBill!== null ?
                                <Input  defaultValue={ dataBill.mailUser} id="userMail" placeholder="Ingrese su Correo" />
                                :
                                <Input  id="userMail" placeholder="Ingrese su Correo" />
                        }
                    </Form.Item>
                    <Form.Item
                        label="Contraseña"
                        name="Contrasena"
                        rules={[{required: true, message: 'Porfavor ingrese su contraseña!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        label="Nombre"
                        name="userName"
                        rules={[{required: true, message: 'Porfavor ingese su nombre !'}]}
                    >
                        {
                            dataBill !== null ?
                                <Input defaultValue={ dataBill.nameUser} id="userName" placeholder="Ingrese su nombre" />
                                :
                                <Input id="userName" placeholder="Ingrese su nombre" />
                        }
                    </Form.Item>
                    <Form.Item
                        label="Dirección"
                        name="userAddress"
                        rules={[{required: true, message: 'Porfavor llene el campo'}]}
                    >
                        {
                            dataBill !== null ?
                                <Input defaultValue={ dataBill.addressUser} id="userAddress" placeholder="Ingrese su dirección" />
                                :
                                <Input id="userAddress" placeholder="Ingrese su dirección" />
                        }

                    </Form.Item>
                    <Form.Item
                        label="Teléfono"
                        name="userPhone"
                        rules={[{required: true, message: 'Porfavor ingrese su teléfono'}]}
                    >
                        {
                            dataBill !== null ?
                                <Input defaultValue={ dataBill.phoneUser} id="userPhone" placeholder="Ingrese su teléfono" />
                                :
                                <Input id="userPhone" placeholder="Ingrese su teléfono" />
                        }
                    </Form.Item>
                        {props.current < 2 && (
                            <Form.Item >
                                <Button type="primary" htmlType="submit" onClick={handleKeepData}>
                                    Siguiente
                                </Button>
                            </Form.Item>
                        )}
                </Form>
            </div>
        </>
    )
}
export default UserData;