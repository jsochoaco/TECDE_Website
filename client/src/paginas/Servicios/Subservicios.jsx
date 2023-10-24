import React, { useEffect, useState } from 'react';
import style from './subservicios.module.css';

const Subservicios = ({ subservicios }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=> {
    setCurrentIndex(0)
  },[subservicios])

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % subservicios.length);
    // if (currentIndex < subservicios.length - 3) {
    //   setCurrentIndex(currentIndex + 1);
    // }
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + subservicios.length) % subservicios.length);
    // if (currentIndex > 0) {
    //   setCurrentIndex(currentIndex - 1);
    // }
  };

  const renderSubservicios = () => {
    return (
      <>
      <div className={style.subservicio}>
        <img className={style.subImg} src={subservicios[[(currentIndex - 1 + subservicios.length) % subservicios.length]].imagen} alt={subservicios[[(currentIndex - 1 + subservicios.length) % subservicios.length]].sub}/>
        <h3 className={style.subTit}>{subservicios[[(currentIndex - 1 + subservicios.length) % subservicios.length]].sub}</h3>
      </div>
      <div className={style.medio} >
        <img className={style.subImg} src={subservicios[currentIndex].imagen} alt={subservicios[currentIndex].sub}/>
        <h3 className={style.subTit}>{subservicios[currentIndex].sub}</h3>
      </div>
      <div className={style.subservicio}>
        <img className={style.subImg} src={subservicios[[(currentIndex + 1) % subservicios.length]].imagen} alt={subservicios[[(currentIndex + 1) % subservicios.length]].sub}/>
        <h3 className={style.subTit}>{subservicios[[(currentIndex + 1) % subservicios.length]].sub}</h3>
      </div>
      </>
    )
  };

  return (
    <div className={style.carruselcontainer}>
        <button className={style.prevButton} onClick={handlePrevClick}>&#8249;</button>
        <div className={style.carrusel}>
            {renderSubservicios()}
        </div>
        <button className={style.nextButton} onClick={handleNextClick}>&#8250;</button>
    </div>
  );
};

export default Subservicios;