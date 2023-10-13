import style from "./Proposito.module.css"



const Proposito = () => {
    return (
        <>
        <div className={style.divContenedorProp}>
            <div className={style.divproposito}>
                <h2 className={style.tituloProp}>Nuestro proposito</h2>
                <h5 className={style.parrafoProp}>Queremos lograr la democratización y accesibilidad a las tecnologías de última generación para el sector industrial Colombiano y Latinoamericano, fomentando así la competitividad respecto a otras industrias y generando un crecimiento exponencial en el desarrollo del sector.</h5>
            </div>
            <div className={style.divproposito}>
                <h5 className={style.parrafoProp}>Contamos con más de 6 años en el desarrollo de proyectos de ingeniería que han incluido la creación de nuevos productos, la automatización de procesos y la consultoria en diversas empresas, sumado a todos los conocimientos y habilidades al rededor de la tecnologías de punta actuales.</h5>
                <h2 className={style.tituloProp}>Nuestra experiencia</h2>
            </div>
        </div>
        </>

    )
}

export default Proposito