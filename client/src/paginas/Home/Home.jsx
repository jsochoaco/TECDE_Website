import style from "./home.module.css"
import Banner from "../../components/Banner/Banner"
import SecondBanner from "../../components/SecondBanner/SecondBanner"
import BannerCita from "../../components/BaneerCita/BannerCita"
import BannerPartner from "../../components/Partner/Partner"
import BannerServicios from "../../components/Servicios/ServiciosBanner"
import Producto from "../../components/Producto/Producto"
import {Element } from 'react-scroll';


const Home = () => {
    return (
        <>
        <div className={style.divContenedor}>
        <Element name="banner">
            <Banner />
        </Element>
        <Element name="secondBanner">
          <SecondBanner />
        </Element>
        <Element name="producto">
          <Producto />
        </Element>
        <Element name="bannerServicios">
          <BannerServicios/>
        </Element>
        <Element name="bannerPartner">
          <BannerPartner />
        </Element>
        <Element name="bannerCita">
          <BannerCita />
        </Element>
        </div>
        </>

    )
}

export default Home