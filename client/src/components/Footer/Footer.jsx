import style from "./Footer.module.css"
import { Link, NavLink} from "react-router-dom"
import { useSelector } from "react-redux"

const Footer = () => {
    const idiomaActual = useSelector((state) => state.idioma)
    return (
        <div className={style.footerContenedor}>
        <div className={style.footerContacto}>
            <img className={style.footerLogo} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1696731567/TECDE/Tecde_horizontal_color_black_uutvxz.png" alt="TECDE" />
            <div className={style.divRedesTotal}>
                <h4>{idiomaActual === "es" ? "Síguenos": "Follow Us"}</h4>
                <div className={style.divRedes}>
                    <NavLink to="https://www.linkedin.com/company/tecde-ingeniería/?viewAsMember=true" className={style.link} target="_blank">    
                    <img className={style.iconoRedes} src="https://api.iconify.design/line-md:linkedin.svg?color=%2300acca" alt="insta"/>
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/company/tecde-ingeniería/?viewAsMember=true" className={style.link} target="_blank">    
                        <h5 className={style.red}>LinkedIn</h5>
                    </NavLink>
                </div>
                <div className={style.divRedes}>
                    <NavLink to="https://twitter.com/tecdeing" className={style.link} target="_blank">    
                    <img className={style.iconoRedes} src="https://api.iconify.design/line-md:twitter-x.svg?color=%2300acca" alt="insta"/>
                    </NavLink>
                    <NavLink to="https://twitter.com/tecdeing" className={style.link} target="_blank">    
                    <h5 className={style.red}>X - Twitter</h5>
                    </NavLink>
                </div>
                <div className={style.divRedes}>
                    <NavLink to="https://www.instagram.com/tecde.ingenieria/?hl=es" className={style.link} target="_blank">
                        <img className={style.iconoRedes} src="https://api.iconify.design/line-md:instagram.svg?color=%2300acca" alt="insta"/>
                    </NavLink>
                    <NavLink to="https://www.instagram.com/tecde.ingenieria/?hl=es" className={style.link} target="_blank">
                        <h5 className={style.red}>Instagram</h5>
                    </NavLink>
                </div>
            </div>
            <div className={style.divContacto}>
                <h4>{idiomaActual === "es" ? "Contáctanos": "Contact Us"}</h4>
                <div className={style.divContactData}>
                    <a href="mailto:ingenieria@tecde.co">
                    <img className={style.iconoRedes} src="https://api.iconify.design/ic:baseline-email.svg?color=%2300acca" alt="insta"/>
                    </a>
                    <a href="mailto:ingenieria@tecde.co">
                    <h5 className={style.red}>ingenieria@tecde.co</h5>
                    </a>
                </div>
                <div className={style.divContactData}>
                    <NavLink to="https://api.whatsapp.com/send/?phone=573136146430&text=Hola,%20estoy%20interesado(a)%20en%20saber%20más%20información%20acerca%20de%20TECDE%20Ingeniería%20y%20sus%20servicios%20" className={style.link} target="_blank">
                        <img className={style.iconoRedes} src="https://api.iconify.design/ic:outline-whatsapp.svg?color=%2300acca" alt="insta"/>
                    </NavLink>
                    <NavLink to="https://api.whatsapp.com/send/?phone=573136146430&text=Hola,%20estoy%20interesado(a)%20en%20saber%20más%20información%20acerca%20de%20TECDE%20Ingeniería%20y%20sus%20servicios%20" className={style.link} target="_blank">
                        <h5 className={style.red}>{idiomaActual === "es" ? "Envíanos un mensaje": "Send a message"}</h5>
                    </NavLink>
                </div>
                <div className={style.divContactData}>
                    <a href="tel:+573136146430">
                        <img className={style.iconoRedes} src="https://api.iconify.design/material-symbols:call.svg?color=%2300acca" alt="insta"/>
                    </a>
                    <a href="tel:+573136146430">
                        <h5 className={style.red}>+57 3136146430</h5>
                    </a>
                </div>
            </div>
        </div>
        <div className={style.divMarca}>
            <h5 className={style.marcaTECDE}>TECDE Ingeniería 2023</h5>
            <h6 className={style.marcaPropia}>{idiomaActual === "es" ? "Un desarrollo de ": "A development of "} <Link to="https://www.linkedin.com/in/juanochoa-fullstack/" className={style.nameDev} target="_blank"><strong>Juan Sebastián Ochoa Cortés</strong></Link></h6>
        </div>
        </div>
    )
}

export default Footer