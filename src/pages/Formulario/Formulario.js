import Form1 from "../../components/Form1/Form1";
import Form2 from "../../components/Form2/Form2";
import React, { useState } from 'react';
import "./Formulario.scss"


const Formulario = () => {
    const [step, setStep] = useState(1);
    
    return(<div className="formulario">
        {step === 1 && <Form1/>}
        {step === 2 && <Form2/>}
    </div>)
}

export default Formulario;