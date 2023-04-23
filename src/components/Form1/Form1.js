import "./Form1.scss";
import React, { useState } from 'react';

const Form1 = () => {
    return(
        <div className="form form1">
            <div>
                <h3>No estás sola. Cuéntanos qué te identifica y te conectaremos con personas que te comprenden y te guían en tu desarrollo.  </h3>
                <h4>La empatía es un pilar fundamental de nuestra comunidad. Creemos que al compartir experiencias, habilidades y conocimientos con nuestros mentores,  potenciamos nuestra vida a través de nuestras diferencias en común. </h4>
                <div>
                    <i class="fa-regular fa-clock"></i>
                    <p><span>Tiempo del formulario:</span> 5 minutos</p>
                </div>
            </div>
            <button>Siguiente</button>
        </div>
    )
}

export default Form1;