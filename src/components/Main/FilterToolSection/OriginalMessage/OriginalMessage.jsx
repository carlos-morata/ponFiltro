import React from "react";
import ToneSelector from '../ToneSelector';

const OriginalMessage = () => {
  return <section className="originalMessage-container">
    <h3>Tu borrador (sin filtros)</h3>
    <section className="original-chat">
      <textarea name="originalMessage" id="originalMessage" placeholder="Ej: Estoy harto que me ignoréis en las reuniones. Si no se arregla esto me largo."></textarea>
    </section>
    <ToneSelector />
  </section>;
};

export default OriginalMessage;
