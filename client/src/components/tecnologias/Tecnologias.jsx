import { useSelector } from "react-redux"
import './tecnologia.css';

const Tecnologias = ({ images }) => {
    const doubledImages = Array(10).fill([...images]).flat();
    const idiomaActual = useSelector((state) => state.idioma)
    console.log(idiomaActual);
    return (
        <div className="contenedor">
            <h1 className="tituloTecnologia">{idiomaActual === "es" ? "Apoyados por":"We enhance your business with advanced technological solutions"}</h1>
            <div className="carousel">
                <div className="carouselInner">
                    {doubledImages.map((image, index) => (
                        <div className="slide" key={index}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};


export default Tecnologias;
