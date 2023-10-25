import React, { useEffect, useState } from 'react';
import style from './subservicios.module.css';

const Subservicios = ({ subservicios }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentPage(0);
  }, [subservicios]);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % subservicios.length);
    setCurrentPage((currentPage + 1) % subservicios.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + subservicios.length) % subservicios.length);
    setCurrentPage((currentPage - 1 + subservicios.length) % subservicios.length);
  };

  const handlePageClick = (pageIndex) => {
    setCurrentIndex(pageIndex);
    setCurrentPage(pageIndex);
  };

  const renderPaginationDots = () => {
    return subservicios.map((_, index) => (
      <span
        key={index}
        className={currentPage === index ? style.activeDot : style.paginationDot}
        onClick={() => handlePageClick(index)}
      />
    ));
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
    <>
      <div className={style.carruselcontainer}>
        <button className={style.prevButton} onClick={handlePrevClick}>&#8249;</button>
        <div className={style.carrusel}>
            {renderSubservicios()}
        </div>
        <button className={style.nextButton} onClick={handleNextClick}>&#8250;</button>
      </div>
      <div className={style.pagination}>
        {renderPaginationDots()}
      </div>
    </>

  );
};

export default Subservicios;