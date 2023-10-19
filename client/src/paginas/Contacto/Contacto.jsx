import style from "./Contacto.module.css"
import { useEffect } from "react";
import { useSelector } from "react-redux"

const Contacto = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    useEffect(() => {
        // Cargar el script de Typeform después de que el componente se monte
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Eliminar el script si el componente se desmonta
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={style.divBanner}>
            <div className={style.divTextoContacto}>
                <h1 className={style.contactoTitulo}>{idiomaActual === "es" ? "No pierdas la oportunidad de llevar tu empresa a otro nivel de ingeniería y tecnología con TECDE":"Do not miss the opportunity to take your company to a new level of engineering and technology with TECDE."}</h1>
                <h2 className={style.contactoParrafo}>{idiomaActual === "es" ? "¡Dejános tus datos y juntos hagamos crecer tu empresa!":"Leave us your information, and let's work together to grow your business!"}</h2>
            </div>
            <div className={style.divForm}>
                <div className={style.butonForm} data-tf-live="01HCK33EZ7TRCT9FHSA7GC4QDS"></div>
            </div>
        </div>
    );
};

export default Contacto;