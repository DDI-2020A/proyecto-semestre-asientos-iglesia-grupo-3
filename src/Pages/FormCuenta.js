import React, {useState} from 'react';
import { Steps} from "antd";
import '../styles/cuenta.css';
import UserAvatar from "../components/UserAvatar";
import UserData from "../components/UserData";
const { Step } = Steps;

const FormCuenta = () => {
    const [current, SetCurrent] = useState(0);
    const [dataBill, SetDataBill] = useState({
        nameUser: "",
        mailUser: "",
        phoneUser: "",
        addressUser: "",
        avatarUser: "",
    });


    const handleAddUserData = (name,mail,phone,address) => {
        SetDataBill( prevState => {
            const newUserDataBill = {...prevState};
            newUserDataBill.nameUser = name;
            newUserDataBill.mailUser = mail;
            newUserDataBill.phoneUser = phone;
            newUserDataBill.addressUser = address;
            return newUserDataBill;
        })
        console.log("dataBill", dataBill);
    }
    const handleAddUserAvatar = (avatar) => {
        SetDataBill( prevState => {
            const newUserDataBill = {...prevState};
            newUserDataBill.avatarUser = avatar;
            return newUserDataBill;
        })
        console.log("dataBill", dataBill);
    }
    const handleNext= () => {
        SetCurrent( current + 1);
    }

    const handlePrev = () => {
        SetCurrent(current - 1);
    }
    const steps = [
        {
            title: 'Datos de usuario',
            content: <UserData current = {current}
                                             dataBill= { dataBill}
                                            onNext = { handleNext }
                                            onUpdateValues= { handleAddUserData() } /> ,
        },
        {
            title: 'Seleccionar Avatar',
            content: <UserAvatar current = {current}
                                            dataBill = { dataBill}
                                            onNext = { handleNext }
                                            onPrev = { handlePrev }
                                            onUpdateValues2 = { handleAddUserAvatar()} />,
        },
    ];

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>

        </>

    );
}
export default FormCuenta;