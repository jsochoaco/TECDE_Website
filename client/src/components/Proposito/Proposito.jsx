import style from "./Proposito.module.css"
import { useSelector } from "react-redux"

const Proposito = () => {
    const idiomaActual = useSelector((state) => state.idioma)

    const briefUrl = "https://drive.google.com/file/d/1EFo53FXcnAollsiMM_hoaJ2lv0SCUpUk/view?usp=sharing";

    // const handleDescargaClick = () => {
    //   // Crea un enlace temporal y simula un clic para iniciar la descarga
    //   const link = document.createElement("a");
    //   link.href = briefUrl;
    //   link.target = "_blank";
    //   link.download = "nombre-del-brief.pdf"; // Puedes personalizar el nombre del archivo aquí
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // };

    return (
        <>
        <div className={style.divContenedorProp}>
            <div className={style.divproposito}>
                <h2 className={style.tituloProp}>{idiomaActual === "es" ? "Nuestro propósito":"Our purpose"}</h2>
                <h5 className={style.parrafoProp}>
                    {idiomaActual === 'es' ? (
                    <>
                    Queremos lograr la <strong>democratización y accesibilidad a las tecnologías de última generación</strong> para el sector industrial Colombiano y Latinoamericano,{' '}
                    <strong>fomentando así la competitividad</strong> respecto a otras industrias y generando un crecimiento exponencial en el desarrollo del sector.
                    </>) : (<>
                    We aim to achieve the <strong>democratization and accessibility of cutting-edge technologies</strong> for the Colombian and Latin American industrial sector,{' '}
                    <strong>thus fostering competitiveness</strong> compared to other industries and generating exponential growth in the sector's development.
                    </>
                    )}
                </h5>
            </div>
            <div className={style.divproposito2}>
            <h5 className={style.parrafoProp}>
                {idiomaActual === 'es' ? (
                <>
                Contamos con <strong>más de 6 años en el desarrollo de proyectos de ingeniería</strong> que han incluido la creación de nuevos productos, la automatización de procesos y la consultoría en diversas empresas, sumado a todos los <strong>conocimientos y habilidades en torno a las tecnologías de vanguardia actuales.</strong>
                </>) : (<>
                We have <strong>over 6 years of experience in engineering project development</strong>, including the creation of new products, process automation, and consultancy in various companies, along with all the <strong>knowledge and skills in cutting-edge technologies.</strong></>)}
            </h5>
            <h2 className={style.tituloProp}>{idiomaActual === "es" ? "Nuestra experiencia":"Our experience"}</h2>
            </div>
            <h2 className={style.titulobrief}>{idiomaActual === "es" ? "Conoce más en nuestro brief":"Learn more in our brief"}</h2>  <iframe className={style.frame} src="https://drive.google.com/file/d/1EFo53FXcnAollsiMM_hoaJ2lv0SCUpUk/preview" width="80%" height="500px" allow="autoplay"></iframe>      
        </div>
        </>

    )
}
export default Proposito