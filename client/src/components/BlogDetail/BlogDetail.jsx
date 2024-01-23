import style from "./blogDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setBlogEn, setBlogSp } from '../../redux/actions';
import { useEffect, useState } from "react";

const BlogDetail = () => {
    const dispatch = useDispatch();
    const idiomaActual = useSelector((state) => state.idioma);
    const { id } = useParams();
    const datos = useSelector((state) => state.spanishBlogs);
    const datosEN = useSelector((state) => state.englishBlogs);
    const [datosDisplay, setDatosDisplay] = useState({});

    useEffect(() => {
        dispatch(setBlogEn(datosEN));
        dispatch(setBlogSp(datos));
    }, [dispatch, datos, datosEN]);

    useEffect(() => {
        const idNumero = parseInt(id, 10);
        const data = idiomaActual === "es" ? datos : datosEN;
        const dato = data.find((articulo) => articulo.id === idNumero);
        setDatosDisplay(dato || {});
    }, [idiomaActual, id, datos, datosEN]);

    console.log(datosDisplay);

    return (
        <div className={style.divBanner}>
            <div className={style.divTexto}>
                <h1 className={style.tituloBanner}>{datosDisplay.dato}</h1>
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
                        {datosDisplay.articulo && datosDisplay.articulo.map((dato) => (
                            <div key={dato.id} className={style.divDato}>
                                <h4 className={style.dato}>{dato.subtitulo}</h4>
                                <p className={style.complemento}>{dato.contenido}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
