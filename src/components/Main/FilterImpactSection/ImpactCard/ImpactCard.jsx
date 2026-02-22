import React from "react";

const ImpactCard = () => {
  return <section className="cards-section">
    <article className="original-mail mail-article">
      <h4 className="title-mail">Email Original</h4>
      <p className="paragraph-mail">
        "¡Esto es un desastre! Nadie me avisó de los cambios. Siempre hacéis lo mismo, estoy harto de vuestra incompentencia."
      </p>
    </article>
    <article className="filtered-mail mail-article">
      <h4 className="title-mail">Email con filtro</h4>
      <p className="paragraph-mail">
        "Me preocupa ver los cambios recientes sin haber recibido aviso previo. Sería muy útil mejorar nuestra comunicación para evitar estos contratiempos en el futuro."
      </p>
    </article>
  </section>;
};

export default ImpactCard;
