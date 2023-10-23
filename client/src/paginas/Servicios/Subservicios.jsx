import React, { useEffect, useState } from 'react';
import style from './subservicios.module.css';

const Subservicios = ({ subservicios }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=> {
    setCurrentIndex(0)
  },[subservicios])

  const handleNextClick = () => {
    if (currentIndex < subservicios.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderSubservicios = () => {
    const subserviciosToShow = subservicios.slice(currentIndex, currentIndex + 3);
    return subserviciosToShow.map((subservicio, index) => (
      <div className={style.subservicio} key={index} >
        <img className={style.subImg} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1698086798/TECDE/undraw_project_complete_lwss_bczidk.svg" alt={subservicio.sub}/>
        {/* <img className={style.subImg} src={subservicio.imagen} alt={subservicio.sub}/> */}
        <h3 className={style.subTit}>{subservicio.sub}</h3>
      </div>
    ));
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