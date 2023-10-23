import React, { useEffect, useState } from 'react';
import styles from './carousel.module.css';
import {useSelector } from "react-redux"


function Carousel() {
  const idiomaActual = useSelector((state) => state.idioma);
  const images = [
    'https://res.cloudinary.com/dfmsezslx/image/upload/v1697070158/undraw_environmental_study_re_q4q8_nzmcc2.svg',
    'https://res.cloudinary.com/dfmsezslx/image/upload/v1697070437/TECDE/undraw_team_goals_re_4a3t_yztpyl.svg',
    'https://res.cloudinary.com/dfmsezslx/image/upload/v1697071006/TECDE/undraw_sharing_knowledge_03vp_vhbmae.svg'
  ];
  
  const textIng = [
    "Our purpose is to achieve the democratization and accessibility of cutting-edge technologies for the Colombian and Latin American industrial sector.",
    "We implement cutting-edge technology into your processes and operations to transform your business, guiding it toward new opportunities for innovation and exponential growth.",
    "Through the development of personalized solutions, we enhance your company's operations, supported by innovation strategies and agile methodologies."
  ];
  
  const textEs = [
    "Nuestro propósito es lograr la democratización y accesibilidad de las tecnologías de última generación para el sector industrial colombiano y latinoamericano.",
    "Implementamos tecnología de vanguardia en tus procesos y operaciones para transformar tu negocio y guiarlo hacia nuevas oportunidades de innovación y crecimiento exponencial.",
    "A través del desarrollo de soluciones personalizadas, mejoramos las operaciones de tu empresa con el respaldo de estrategias de innovación y metodologías ágiles."
  ];
  
  var texto = [];
  if (idiomaActual === "es") {
      texto = [...textEs];
  } 
  else {
      texto = [...textIng];
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        <img className={styles.carouseImg} src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <h4 className={styles.parrafoSlide}> {texto[currentSlide]}</h4>
      </div>
      <button className={styles.prevButton} onClick={prevSlide}>&#8249;</button>
      <button className={styles.nextButton} onClick={nextSlide}>&#8250;</button>
    </div>
  );
}

export default Carousel;