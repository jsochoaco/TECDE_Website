import style from "./blog.module.css"
import { useSelector} from "react-redux"
import { NavLink } from "react-router-dom"

const Blog = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    const datos = useSelector((state) => state.spanishBlogs)
    const datosEN = useSelector((state) => state.englishBlogs)
    var datosDisplay = "";
    if (idiomaActual === "es") {
        datosDisplay = datos;
    } 
    else {
        datosDisplay = datosEN;
    }
    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h3 className={style.tituloBanner}> {idiomaActual === "es" ? "Blog de tendencias tecnológicas":"Technology trends blog"} </h3>
                <div className={style.bannerUs}>
                    <div className={style.divDatos}>
                        {datosDisplay.map((dato) => (
                        <div key={dato.id} className={style.divDato}>
                            <div className={style.id}>
                            <img className={style.img} src={dato.logo} alt={"TECDE " + dato.dato} />
                            </div>
                        <h4 className={style.dato}>{dato.dato}</h4>
                        <p className={style.complemento}>{dato.complemento}</p>
                        <NavLink to={`/blog/${dato.id}/${dato.dato.replace(/ /g, "_")}`} >
                            <button className={style.callBotonBan }>Ver articulo completo</button>
                        </NavLink>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog