import { Steps} from "antd";
import React, { useState} from "react";
import '../styles/registrarAsiento.css';
import FormRegistrarAsiento3 from "../components/FormRegistrarAsiento3";
import FormRegistrarAsiento1 from "../components/FormRegistrarAsiento1";
import FormRegistrarAsiento2 from "../components/FormRegistrarAsiento2";
import ConfirmarAsiento from "../components/ConfirmarAsiento";



const { Step } = Steps;


const FormRegistrarAsiento = () => {

  const [current, SetCurrent] = useState(0);

    const [datosUsuario, SetDatosUsuario] = useState({
        nombreUsuario: "",
        telefonoUsuario: "",
        CedulaPasUsuario: "",
        HorarioMisaUsuario: "",
        DiaMisa: "",
        PuestoMisaUsuarioF: "",
        PuestoMisaUsuarioC: "",
    });


    const handleLlenarDatosUsuarioForm1 = (nombre, telefono, cedula) => {
            SetDatosUsuario( prevState => {
                const NuevosValores = {...prevState};
                NuevosValores.nombreUsuario = nombre;
                NuevosValores.telefonoUsuario = telefono;
                NuevosValores.CedulaPasUsuario = cedula;
                return NuevosValores;
            })
        console.log("datosUsuario", datosUsuario);
    }

    const handleLlenarDatosUsuarioForm2 = (dia, horario) => {
        SetDatosUsuario( prevState => {
            const NuevosValores = {...prevState};
            NuevosValores.DiaMisa = dia ;
            NuevosValores.HorarioMisaUsuario = horario;
            return NuevosValores;
        })
        console.log("datosUsuario", datosUsuario);
    }

    const handleLlenarDatosUsuarioForm3 = (fila, columna) => {
        SetDatosUsuario( prevState => {
            const NuevosValores = {...prevState};
            NuevosValores.PuestoMisaUsuarioF = fila;
            NuevosValores.PuestoMisaUsuarioC = columna;
            return NuevosValores;
        })
        console.log("datosUsuario", datosUsuario);
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
            content: <FormRegistrarAsiento1 current = {current}
                                            datosUsuario = { datosUsuario }
                                            onNext = { handleNext }
                                            onActualizarValores = { handleLlenarDatosUsuarioForm1 } /> ,
        },
        {
            title: 'Seleccionar Horario',
            content: <FormRegistrarAsiento2 current = {current}
                                            datosUsuario = { datosUsuario }
                                            onNext = { handleNext }
                                            onPrev = { handlePrev }
                                            onActualizarValores2 = { handleLlenarDatosUsuarioForm2 } />,
        },
        {
            title: 'Seleccionar puesto',
            content: <FormRegistrarAsiento3 current = {current}
                                            datosUsuario = { datosUsuario }
                                            onPrev = { handlePrev }
                                            onNext = { handleNext }
                                            onActualizarValores3 = { handleLlenarDatosUsuarioForm3 }/>,
        },
        {
            title: 'Confirmar datos',
            content: <ConfirmarAsiento current = {current}
                                            datosUsuario = { datosUsuario }
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

export default FormRegistrarAsiento;

