import { useSelector } from "react-redux"
import './tecnologia.css';

const Tecnologias = ({ images }) => {
    const doubledImages = Array(1).fill([...images]).flat();
    const idiomaActual = useSelector((state) => state.idioma)
    console.log(idiomaActual);
    return (
        <div className="contenedor">
            <h1 className="tituloTecnologia">{idiomaActual === "es" ? "Apoyados por":"Supported by"}</h1>
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
