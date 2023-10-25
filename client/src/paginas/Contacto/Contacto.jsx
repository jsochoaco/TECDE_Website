import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "./Spinner"; // Reemplaza "Spinner" con el nombre de tu componente de spinner
import style from "./Contacto.module.css"

const Contacto = () => {
    const idiomaActual = useSelector((state) => state.idioma);
    const [formId, setFormId] = useState("");
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const handleLoad = () => {
        setTimeout(()=> {setScriptLoaded(true)}, 1000)
    }
    useEffect(() => {
        // Cargar el script de Typeform después de que el componente se monte
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);
        setFormId(idiomaActual === "es" ? "01HCK33EZ7TRCT9FHSA7GC4QDS" : "01HD83G55D2HDQS9XDBZCHPXKX");
        handleLoad()
    }, [idiomaActual, handleLoad]);
    return (
        <div className={style.divBanner}>
            <div className={style.divTextoContacto}>
                <h1 className={style.contactoTitulo}>
                    {idiomaActual === "es" ? "No pierdas la oportunidad..." : "Do not miss the opportunity..."}
                </h1>
                <h2 className={style.contactoParrafo}>
                    {idiomaActual === "es"
                        ? "¡Déjanos tus datos y juntos hagamos crecer tu empresa!"
                        : "Leave us your information, and let's work together to grow your business!"}
                </h2>
            </div>
            <div className={style.divForm}>
                {scriptLoaded ? (
                    <div className={style.butonForm} data-tf-live={formId}></div>
                ) : (
                    <Spinner /> // Muestra el spinner mientras se carga el script
                )}
            </div>
        </div>
    );
};

export default Contacto;