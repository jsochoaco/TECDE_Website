import React, { useState } from 'react';
import styles from './carousel.module.css'; // Importa tus estilos CSS desde un archivo separado


function Carousel() {
  const images = ['https://res.cloudinary.com/dfmsezslx/image/upload/v1697070158/undraw_environmental_study_re_q4q8_nzmcc2.svg', 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697070437/TECDE/undraw_team_goals_re_4a3t_yztpyl.svg', 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697071006/TECDE/undraw_sharing_knowledge_03vp_vhbmae.svg'];
  const texto = ["Nuestro proposito es lograr la democratización y accesibilidad de las tecnologías de última generación para el sector industrial Colombiano y Latinoamericano","Implementamos tecnología de vanguardia en tus procesos y operaciones para transformar tu negocio y guiarlo a nuevas oportunidades de innovación y crecimiento exponencial", "A través del desarrollo de soluciones personalizadas potenciamos las operaciones de tu empresa apoyados en estrategías de innovación y metodologías ágiles"]
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
        <h4 className={styles.parrafoSlide}> {texto[currentSlide]}</h4>
        <img className={styles.carouseImg} src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

      </div>
      <button className={styles.prevButton} onClick={prevSlide}>&#8249;</button>
      <button className={styles.nextButton} onClick={nextSlide}>&#8250;</button>
    </div>
  );
}

export default Carousel;