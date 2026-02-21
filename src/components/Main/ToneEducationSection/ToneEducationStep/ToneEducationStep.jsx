import React from "react";
import { ClipboardPaste, SlidersHorizontal, CircleCheck } from 'lucide-react';

const ToneEducationStep = () => {
  return <>
    <article className="step-article">
      <ClipboardPaste />
      <h4 className="title-step">1. Pega tu email</h4>
      <p className="paragraph-step">Escribe tal cual lo sientes. No te preocupes por el tono o las palabras malsonantes.</p>
    </article>
    <article className="step-article">
      <SlidersHorizontal />
      <h4 className="title-step">2. Ajusta el filtro</h4>
      <p className="paragraph-step">Elige entre Directo, Neutral o Diplomático según quién sea el destinatario.</p>
    </article>
    <article className="step-article">
      <CircleCheck />
      <h4 className="title-step">3. Revisa antes de enviar</h4>
      <p className="paragraph-step">Obtén una versión pulida y profesional lista para copiar y pegar en tu cliente de correo.</p>
    </article>
  </>;
};

export default ToneEducationStep;
