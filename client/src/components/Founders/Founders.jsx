import { useState } from 'react';
import styles from './Founders.module.css';
import {Link} from "react-router-dom"

const FounderCarousel = () => {
    const founders = [
        {
          name: 'Nelson Andrés Moreno',
          role: 'Gerente',
          image: 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697157794/TECDE/Nelson_owmkoj.jpg',
          background: "Ingeniero Mecánico especializado en Administración",
          linkedIn: "https://www.linkedin.com/in/nelson-andres-moreno-arias-50b9a3232/"
        },
        {
          name: 'Luis Miguel Gonzalez',
          role: 'Director de Tecnología',
          image: 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697157794/TECDE/Luis_ye0tl9.jpg',
          background: "Ingeniero especializado en Inteligencia Artificial",
          linkedIn: "https://www.linkedin.com/in/luis-gonzález-b910711b7/"
        },
        {
            name: 'Juan Sebastián Ochoa',
            role: 'Director de Ingeniería',
            image: 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697155185/TECDE/Ochoa_pky7xy.png',
            background: "Ingeniero Mecánico especializado en Diseño y Desarrollo de Software",
            linkedIn: "https://www.linkedin.com/in/juanochoa-fullstack/"
          },
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

      const prevCard = () => {
        setCurrentIndex((currentIndex - 1 + founders.length) % founders.length);
      };
    
      const nextCard = () => {
        setCurrentIndex((currentIndex + 1) % founders.length);
      };
    
      return (
        <div className={styles.divContenedorFounders}>
            <h3 className={styles.tituloCarrusel}> Equipo directivo </h3>
            <div className={styles.carousel}>
                <div className={styles['carousel-card-small']}>
                    <img className={styles.imgFounder}src={founders[(currentIndex - 1 + founders.length) % founders.length].image} alt={founders[(currentIndex - 1 + founders.length) % founders.length].name} />
                    <h2 className={styles.founderName}>{founders[(currentIndex - 1 + founders.length) % founders.length].name}</h2>
                </div>
                <button className={styles.prevButton} onClick={prevCard}>&#8249;</button>
                <div className={`${styles['carousel-card']} ${styles.active}`}>
                    <img className={styles.imgFounder} src={founders[currentIndex].image} alt={founders[currentIndex].name} />
                    <h2 className={styles.founderName}>{founders[currentIndex].name}</h2>
                    <h4 className={styles.founderRole}>{founders[currentIndex].role}</h4>
                    <h6 className={styles.founderBack}>{founders[currentIndex].background}</h6>
                    <Link to={founders[currentIndex].linkedIn} target="_blank">
                        <img className={styles.linkedIn} src="https://api.iconify.design/skill-icons:linkedin.svg?color=%2300acca" alt="LinkedIn" />
                    </Link>

                </div>
                <button className={styles.nextButton} onClick={nextCard}>&#8250;</button>
                <div className={styles['carousel-card-small']}>
                    <img className={styles.imgFounder} src={founders[(currentIndex + 1) % founders.length].image} alt={founders[(currentIndex + 1) % founders.length].name} />
                    <h2 className={styles.founderName}>{founders[(currentIndex + 1) % founders.length].name}</h2>
                </div>
        </div>
        </div>

      );
};
  export default FounderCarousel;