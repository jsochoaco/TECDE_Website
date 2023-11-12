import { useState } from 'react';
import styles from './Founders.module.css';
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"

const FounderCarousel = () => {
  const idiomaActual = useSelector((state) => state.idioma)
    const foundersEs = [
        {
          name: 'Nelson Andrés Moreno',
          role: 'Gerente',
          image: 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697494203/TECDE/PNG_Socios_TECDE_Mesa_de_trabajo_1_abksdi.png',
          background: "Ingeniero Mecánico especializado en Administración",
          linkedIn: "https://www.linkedin.com/in/nelson-andres-moreno-arias-50b9a3232/"
        },
        {
          name: 'Luis Miguel Gonzalez',
          role: 'Director de Tecnología',
          image: 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697494204/TECDE/PNG_Socios_TECDE-03_yswkks.png',
          background: "Ingeniero especializado en Inteligencia Artificial",
          linkedIn: "https://www.linkedin.com/in/luisgonzalez-ai-engineer/"
        },
        {
            name: 'Juan Sebastián Ochoa',
            role: 'Director de Ingeniería',
            image: 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697494203/TECDE/PNG_Socios_TECDE-02_esjirc.png',
            background: "Ingeniero Mecánico especializado en Diseño y Desarrollo de Software",
            linkedIn: "https://www.linkedin.com/in/juanochoa-fullstack/"
          },
      ];
      const foundersIn = [
        {
          name: 'Nelson Andrés Moreno',
          role: 'Manager',
          image: 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697494203/TECDE/PNG_Socios_TECDE_Mesa_de_trabajo_1_abksdi.png',
          background: "Mechanical Engineer specialized in Administration",
          linkedIn: "https://www.linkedin.com/in/nelson-andres-moreno-arias-50b9a3232/"
        },
        {
          name: 'Luis Miguel Gonzalez',
          role: 'Chief Technology Officer',
          image: 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697494204/TECDE/PNG_Socios_TECDE-03_yswkks.png',
          background: "Engineer specialized in Artificial Intelligence",
          linkedIn: "https://www.linkedin.com/in/luisgonzalez-ai-engineer/"
        },
        {
          name: 'Juan Sebastián Ochoa',
          role: 'Director of Engineering',
          image: 'https://res.cloudinary.com/dfmsezslx/image/upload/v1697494203/TECDE/PNG_Socios_TECDE-02_esjirc.png',
          background: "Mechanical Engineer specialized in Software Design and Development",
          linkedIn: "https://www.linkedin.com/in/juanochoa-fullstack/"
        },
      ];
      var founders = [];
      if (idiomaActual === "es") {
          founders = [...foundersEs];
      } 
      else {
          founders = [...foundersIn];
      }

      const [currentIndex, setCurrentIndex] = useState(0);

      const prevCard = () => {
        setCurrentIndex((currentIndex - 1 + founders.length) % founders.length);
      };
    
      const nextCard = () => {
        setCurrentIndex((currentIndex + 1) % founders.length);
      };
    
      return (
        <div className={styles.divContenedorFounders}>
            <h3 className={styles.tituloCarrusel}>{idiomaActual === "es" ? "Equipo directivo":"Management team"}</h3>
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