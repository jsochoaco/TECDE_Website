import style from "./blogDetail.module.css"
import { useDispatch, useSelector} from "react-redux"
import { NavLink, useParams} from "react-router-dom"
import { setBlogEn, setBlogSp } from '../../redux/actions';
import { useEffect, useState } from "react";

const BlogDetail = () => {
    const dispatch = useDispatch()
    const idiomaActual = useSelector((state) => state.idioma)
    const {id} = useParams()
    const datos = useSelector((state) => state.spanishBlogs)
    const datosEN = useSelector((state) => state.englishBlogs)
    const [datosDisplay, setDatosDisplay] = useState({})
    useEffect(()=> {
        dispatch(setBlogEn(datosEN))
        dispatch(setBlogSp(datos))
      }, [dispatch])    

    useEffect(()=> {
        const idNumero = parseInt(id, 10);
        if (idiomaActual === "es") {
            var dato = datos.filter((articulo) => articulo.id === idNumero);
            setDatosDisplay(dato[0])
        }
        else {
            var dato = datosEN.filter((articulo) => articulo.id === idNumero);
            setDatosDisplay(dato[0])
        }
    }, [dispatch, datos, datosEN])
    console.log(datosDisplay);
    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h1 className={style.tituloBanner}> {datosDisplay.dato} </h1>
                <img
                className={style.img}
                src={datosDisplay.logo}
                alt={"TECDE " + datosDisplay.dato}
                title={datosDisplay.titulo_imagen}
                aria-label={datosDisplay.titulo_imagen}
                data-description={datosDisplay.description}
                data-keywords={datosDisplay.palabras_clave_imagen}
                />
                <div className={style.bannerUs}>
                    <div className={style.divDatos}>
                        {datosDisplay.articulo !== undefined ? (datosDisplay.articulo.map((dato) => (
                        <div key={dato.id} className={style.divDato}>
                        <h4 className={style.dato}>{dato.subtitulo}</h4>
                        <p className={style.complemento}>{dato.contenido}</p>
                        </div>))):(null)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail