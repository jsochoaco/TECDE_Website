import style from "./Contacto.module.css"
import { useEffect } from "react";

const Contacto = () => {
    
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
                <h3 className={style.contactoTitulo}>No pierdas la oportunidad de llevar tu empresa a otro nivel de ingeniería y  tecnología</h3>
                <h4 className={style.contactoParrafo}>¡Dejános tus datos y juntos hagamos crecer tu empresa!</h4>
            </div>
            <div className={style.divForm}>
                <div className={style.butonForm} data-tf-live="01HCK33EZ7TRCT9FHSA7GC4QDS"></div>
            </div>
        </div>
    );
};

export default Contacto;