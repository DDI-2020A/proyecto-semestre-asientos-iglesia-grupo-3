import { Steps} from "antd";
import React, { useState} from "react";
import '../styles/registrarAsiento.css';
import FormRegistrarAsiento3 from "./FormRegisterSeat3";
import FormRegisterSeat1 from "./FormRegisterSeat1";
import FormRegisterSeat2 from "./FormRegisterSeat2";
import ConfirmSeat from "./ConfirmSeat";



const { Step } = Steps;


const FormRegisterSeat = () => {

  const [current, SetCurrent] = useState(0);

    const [dataUser, setDataUser] = useState({
        nameUser: "",
        phoneUser: "",
        identificationCard: "",
        scheduleMass: "",
        dayMass: "",
        seatMassUser: "",

    });


    const handleFillUserData = (name, phone, identificationCard) => {
            setDataUser( prevState => {
                const NewValues = {...prevState};
                NewValues.nameUser = name;
                NewValues.phoneUser = phone;
                NewValues.identificationCard = identificationCard;
                return NewValues;
            })
        console.log("datos Usuario", dataUser);
    }

    const handleFillUserData2 = (day, schedule) => {
        setDataUser( prevState => {
            const NewValues = {...prevState};
            NewValues.dayMass = day ;
            NewValues.scheduleMass = schedule;
            return NewValues;
        })
        console.log("datos Usuario", dataUser);
    }

    const handleFillUserData3 = ( position ) => {
        setDataUser( prevState => {
            const NewValue = {...prevState};
            NewValue.seatMassUser = position;
            return NewValue;
        })
        console.log("datos Usuario", dataUser);
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
            content: <FormRegisterSeat1 current = {current}
                                        dataUser = { dataUser }
                                        onNext = { handleNext }
                                        onUpdateValues = { handleFillUserData } /> ,
        },
        {
            title: 'Seleccionar Horario',
            content: <FormRegisterSeat2 current = {current}
                                        dataUser = { dataUser }
                                        onNext = { handleNext }
                                        onPrev = { handlePrev }
                                        onUpdateValues2 = { handleFillUserData2 } />,
        },
        {
            title: 'Seleccionar puesto',
            content: <FormRegistrarAsiento3 current = {current}
                                            dataUser= { dataUser }
                                            onPrev = { handlePrev }
                                            onNext = { handleNext }
                                            onUpdateValues3 = { handleFillUserData3 }/>,
        },
        {
            title: 'Confirmar datos',
            content: <ConfirmSeat current = {current}
                                  dataUser = { dataUser }
                                  onPrev = { handlePrev }/>,
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

export default FormRegisterSeat;

