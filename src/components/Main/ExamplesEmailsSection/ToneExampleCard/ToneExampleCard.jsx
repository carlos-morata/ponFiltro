import React from "react";
import { Banknote, WifiCog, UsersRound } from 'lucide-react';

const ToneExampleCard = () => {
  return <>
    <article className="example-article">
      <div className="example-article-top">
        <p className="filter-text-example filter-text-direct">Filtro: Directo</p>
        <Banknote />
      </div>
      <h3 className="title-example">Reclamación de pago</h3>
      <span className="span-original">Original</span>
      <p className="paragraph-original-example">
        "Pagadme ya lo que me debéis, que siempre os retrasáis y no es serio."
      </p>
      <span className="span-filter">Filtrado</span>
      <p className="paragraph-filtered-example">"Les escribo para solicitar el abono de la factura pendiente. Agradecería que se cumplan los plazos acordados para evitar contratiempos."</p>
    </article>

    <article className="example-article">
      <div className="example-article-top">
        <p className="filter-text-example filter-text-diplomatic">Filtro: Diplomático</p>
        <WifiCog />
      </div>
      <h3 className="title-example">Email a un superior</h3>
      <span className="span-original">Original</span>
      <p className="paragraph-original-example">"No puedo con todo este trabajo, estoy saturado y nadie me ayuda. Así no llego."</p>
      <span className="span-filter">Filtrado</span>
      <p className="paragraph-filtered-example">"Dada la carga actual de proyectos, me gustaría revisar mis prioridades con usted para asegurar que cumplimos con los estándares de calidad esperados."</p>
    </article>

    <article className="example-article">
      <div className="example-article-top">
        <p className="filter-text-example filter-text-neutral">Filtro: Neutral</p>
        <UsersRound />
      </div>
      <h3 className="title-example">Corrección a un compañero</h3>
      <span className="span-original">Original</span>
      <p className="paragraph-original-example">"Has hecho mal el informe, los datos no tienen sentido. Tienes que repetirlo."</p>
      <span className="span-filter">Filtrado</span>
      <p className="paragraph-filtered-example">"He detectado algunas discrepancias en los datos del informe. ¿Podríamos revisarlos juntos para asegurar que la información sea precisa?"</p>
    </article>
  </>;
};

export default ToneExampleCard;
