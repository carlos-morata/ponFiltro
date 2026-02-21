import React from "react";
import { Banknote, WifiCog, UsersRound } from 'lucide-react';

const ToneExampleCard = () => {
  return <>
    <article className="example-article">
      <p>Filtro: Directo</p>
      <h3 className="title-example">Reclamación de pago <Banknote /></h3>
      <span className="span-original">Original</span>
      <p className="paragraph-original-example">
        "Pagadme ya lo que me debéis, que siempre os retrasáis y no es serio."
      </p>
      <span className="text-filter">Filtrado</span>
      <p className="paragrpah-filtered-example">"Les escribo para solicitar el abono de la factura pendiente. Agradecería que se cumplan los plazos acordados para evitar contratiempos."</p>
    </article>

    <article className="example-article">
      <p>Filtro: Diplomático</p>
      <h3 className="title-example">Email a un superior <WifiCog /></h3>
      <span className="span-original">Original</span>
      <p className="paragraph-original-example">"No puedo con todo este trabajo, estoy saturado y nadie me ayuda. Así no llego."</p>
      <span className="span-filter">Filtrado</span>
      <p className="paragrpah-filtered-example">"Dada la carga actual de proyectos, me gustaría revisar mis prioridades con usted para asegurar que cumplimos con los estándares de calidad esperados."</p>
    </article>

    <article className="example-article">
      <p>Filtro: Neutral</p>
      <h3 className="title-example">Corrección a un compañero <UsersRound /></h3>
      <span className="span-original">Original</span>
      <p className="paragraph-original-example">"Has hecho mal el informe, los datos no tienen sentido. Tienes que repetirlo."</p>
      <span className="text-filter">Filtrado</span>
      <p className="paragrpah-filtered-example">"He detectado algunas discrepancias en los datos del informe. ¿Podríamos revisarlos juntos para asegurar que la información sea precisa?"</p>
    </article>
  </>;
};

export default ToneExampleCard;
