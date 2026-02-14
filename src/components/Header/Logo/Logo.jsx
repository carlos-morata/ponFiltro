import React from "react";
import LogoAvif from '../../../assets/images/LogoPonFiltroHorizontal_avif.avif'
import LogoWebp from '../../../assets/images/LogoPonFiltroHorizontal_Webp.webp'
import LogoPng from '../../../assets/images/LogoPonFiltroHorizontal_sin_fondo.png'


const Logo = () => {
  return <picture>
    {/* <source srcSet={LogoAvif} />
    <source srcSet={LogoWebp} /> */}
    <img src={LogoPng} alt="Logotipo PonFiltro" className="logo" />
  </picture>;
};

export default Logo;
