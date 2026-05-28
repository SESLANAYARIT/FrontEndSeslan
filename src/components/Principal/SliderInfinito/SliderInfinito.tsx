import "./sliderInfinito.scss";
import asen from "src/assets/slider/Comite/asen.webp";
import bg from "src/assets/slider/Comite/bg.webp";
import cpcnay from "src/assets/slider/Comite/cpcnay.webp";
import FGE from "src/assets/slider/Comite/FGE.webp";
// import ITAI from "src/assets/slider/Comite/ITAI.webp";
import pj from "src/assets/slider/Comite/pj.webp";
import tja from "src/assets/slider/Comite/tja.webp";
 const SliderInfinito = () => {
  return (
    <div className="slider">
      <h3 className="text-2xl text-center font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 ">
       NUESTROS ALIADOS EN LA LUCHA ANTICORRUPCIÓN
      </h3>
      <div className="slide-track">
        <a href="https://www.asen.gob.mx/" aria-label="asen">
          <div className="slide">
            <img src={asen} alt="" loading="lazy"/>
          </div>
        </a>
        <a href="https://contraloria.nayarit.gob.mx/" aria-label="contraloria">
          <div className="slide">
            <img src={bg} alt="" loading="lazy"/>
          </div>
        </a>
        <a href="" aria-label="cpcnay">
          <div className="slide">
            <img src={cpcnay} alt="" />
          </div>
        </a>
        <a href="https://fiscaliageneral.nayarit.gob.mx/web/" aria-label="fiscaliageneral">
          <div className="slide">
            <img src={FGE} alt="" loading="lazy"/>
          </div>
        </a>
        {/* <a href="https://portal.itainayarit.org/" aria-label="itai">
          <div className="slide">
            <img src={ITAI} alt="" loading="lazy"/>
          </div>
        </a> */}
        <a href="https://www.tsjnay.gob.mx/" aria-label="tsjnay">
          <div className="slide">
            <img src={pj} alt="" loading="lazy"/>
          </div>
        </a>
        <a href="https://tjan.gob.mx/" aria-label="tja">
          <div className="slide">
            <img src={tja} alt="" loading="lazy"/>
          </div>
        </a>
        <a href="https://www.asen.gob.mx/" aria-label="asen">
          <div className="slide">
            <img src={asen} alt=""loading="lazy" />
          </div>
        </a>
        <a href="https://contraloria.nayarit.gob.mx/" aria-label="contraloria">
          <div className="slide">
            <img src={bg} alt="" loading="lazy"/>
          </div>
        </a>
        <a href="" aria-label="cpcnay">
          <div className="slide">
            <img src={cpcnay} alt="" />
          </div>
        </a>
        <a href="https://fiscaliageneral.nayarit.gob.mx/web/" aria-label="fiscaliageneral">
          <div className="slide">
            <img src={FGE} alt="" loading="lazy"/>
          </div>
        </a>
        {/* <a href="https://portal.itainayarit.org/" aria-label="itai">
          <div className="slide">
            <img src={ITAI} alt="" loading="lazy"/>
          </div>
        </a> */}
        <a href="https://www.tsjnay.gob.mx/" aria-label="tsjnay">
          <div className="slide">
            <img src={pj} alt="" loading="lazy"/>
          </div>
        </a>
        <a href="https://tjan.gob.mx/" aria-label="tja">
          <div className="slide">
            <img src={tja} alt="" loading="lazy"/>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SliderInfinito;
