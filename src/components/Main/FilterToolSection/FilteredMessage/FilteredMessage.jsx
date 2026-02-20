import React from "react";
import { BadgeCheck, Files, Zap } from 'lucide-react';

const FilteredMessage = () => {
  return <section className="filteredMessage-container">
    <div className=" filteredTop-container">
    <h3>
      <BadgeCheck /> Resultado Profesional
    </h3>
    <button className="copy-button">
      <Files /> Copiar
    </button>
    </div>
    <section className="filteredChat-section">
      <p className="filtered-message">
        Hola equipo, <br />
        Me gustaría abordar un tema importante sobre nuestras dinámicas en las reuniones. Siento que mis aportaciones no están siendo consideradas tanto como me gustaría, y creo que podríamos beneficiarnos de un enfoque más inclusivo.
        ¿Podemos agendar un momento para discutir cómo mejorar nuestra comunicación?
       <br /> Saludos,
      </p>
    <p className="info-text"> 
      <Zap /> Generado por IA en 0.4s
    </p>
    </section>
  </section>;
};

export default FilteredMessage;
