import style from "./threebanner.module.css"

const ThreeBanner = () => {
    const imagenes = ["https://res.cloudinary.com/dfmsezslx/image/upload/v1697075681/TECDE/undraw_code_review_re_woeb_mzgjac.svg", "https://res.cloudinary.com/dfmsezslx/image/upload/v1697075681/TECDE/undraw_design_components_9vy6_ao9ban.svg", "https://res.cloudinary.com/dfmsezslx/image/upload/v1697075682/TECDE/undraw_progressive_app_m-9-ms_vhc5kh.svg", "https://res.cloudinary.com/dfmsezslx/image/upload/v1697075681/TECDE/undraw_visionary_technology_re_jfp7_x2bmpt.svg"]
    const texto = ["Desarrollo de software en la nube", "Diseño y consultoria para equipos y plantas", "Integración de IA para la mejora de procesos y plantas", "Automatización y mejora de procesos productivos y administrativos"]
    var cards = []
    for (let i = 0; i < 4; i++) {
        const objeto = {
            imagen: imagenes[i],
            texto: texto[i]
        }
        cards.push(objeto)
    }
    console.log(cards);
    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h3 className={style.tituloBanner}> ¿Cómo lo hacemos en TECDE?</h3>
                <div className={style.cardsThree}>
                {cards.map((card) => (
    <div className={style.card} key={card.imagen}>
        <img className={style.imgCard} src={card.imagen} alt="Ilustración" />
        <h4 className={style.parrafoCard}>{card.texto}</h4>
    </div>
))}
                </div>
            </div>
        </div>
    )
}

export default ThreeBanner