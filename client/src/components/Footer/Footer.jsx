import style from "./Footer.module.css"
import { Link, NavLink} from "react-router-dom"

const Footer = () => {


    return (
        <div className={style.footerContenedor}>
        <div className={style.footerContacto}>
            <img className={style.footerLogo} src="https://res.cloudinary.com/dfmsezslx/image/upload/v1696731567/TECDE/Tecde_horizontal_color_black_uutvxz.png" alt="TECDE" />
            <div className={style.divRedesTotal}>
                <h4>Siguenos</h4>
                <div className={style.divRedes}>
                    <img className={style.iconoRedes} src="https://api.iconify.design/line-md:linkedin.svg?color=%2300acca" alt="insta"/>
                    <NavLink to="https://www.facebook.com/fixershoes/" className={style.link} target="_blank">    
                        <h5 className={style.red}>LinkedIn</h5>
                    </NavLink>
                </div>
                <div className={style.divRedes}>
                        <img className={style.iconoRedes} src="https://api.iconify.design/line-md:twitter-x.svg?color=%2300acca" alt="insta"/>
                    <NavLink to="https://www.facebook.com/fixershoes/" className={style.link} target="_blank">    
                    <h5 className={style.red}>X - Twitter</h5>
                    </NavLink>
                </div>
                <div className={style.divRedes}>
                    <img className={style.iconoRedes} src="https://api.iconify.design/line-md:instagram.svg?color=%2300acca" alt="insta"/>
                    <NavLink to="https://www.instagram.com/tecde.ingenieria/?hl=es" className={style.link} target="_blank">
                        <h5 className={style.red}>Instagram</h5>
                    </NavLink>
                </div>
            </div>
            <div className={style.divContacto}>
                <h4>Contactanos</h4>
                <div className={style.divContactData}>
                    <img className={style.iconoRedes} src="https://api.iconify.design/ic:baseline-email.svg?color=%2300acca" alt="insta"/>
                    <h5 className={style.red}>ingenieria@tecde.co</h5>
                </div>
                <div className={style.divContactData}>
                    <img className={style.iconoRedes} src="https://api.iconify.design/ic:outline-whatsapp.svg?color=%2300acca" alt="insta"/>
                    <h5 className={style.red}>+57 3136146430</h5>
                </div>
            </div>
        </div>
        <div className={style.divMarca}>
            <h5 className={style.marcaTECDE}>TECDE Ingeniería 2023</h5>
            <h6 className={style.marcaPropia}>Un desarrollo de <Link to="https://www.linkedin.com/in/juanochoa-fullstack/" className={style.nameDev} target="_blank"><strong>Juan Sebastián Ochoa Cortés</strong></Link></h6>
        </div>
        </div>
    )
}

export default Footer