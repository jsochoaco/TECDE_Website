import style from "./Contacto.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Contacto = () => {
    const idiomaActual = useSelector((state) => state.idioma);
    const [formId, setFormId] = useState("");

    useEffect(() => {
        // Cargar el script de Typeform después de que el componente se monte
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Actualizar el ID del formulario según el idioma actual
        setFormId(idiomaActual === "es" ? "01HCK33EZ7TRCT9FHSA7GC4QDS" : "01HD83G55D2HDQS9XDBZCHPXKX");

        return () => {
            // Eliminar el script si el componente se desmonta
            document.body.removeChild(script);
        };
    }, [idiomaActual]);
    return (
        <div className={style.divBanner}>
            <div className={style.divTextoContacto}>
                <h1 className={style.contactoTitulo}>
                    {idiomaActual === "es" ? "No pierdas la oportunidad..." : "Do not miss the opportunity..."}
                </h1>
                <h2 className={style.contactoParrafo}>
                    {idiomaActual === "es" ? "¡Dejános tus datos y juntos hagamos crecer tu empresa!" : "Leave us your information, and let's work together to grow your business!"}
                </h2>
            </div>
            <div className={style.divForm}>
                <div className={style.butonForm} data-tf-live={formId}></div>
            </div>
        </div>
    );
};

export default Contacto;