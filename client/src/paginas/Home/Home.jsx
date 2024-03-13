import style from "./home.module.css"
import Banner from "../../components/Banner/Banner"
import SecondBanner from "../../components/SecondBanner/SecondBanner"
import BannerCita from "../../components/BaneerCita/BannerCita"
import BannerServicios from "../../components/Servicios/ServiciosBanner"
import Producto from "../../components/Producto/Producto"
import {Element } from 'react-scroll';
import Tecnologias from "../../components/tecnologias/Tecnologias"
import Productoexia from "../../components/Producto/Productoexia"
import Productofluxia from "../../components/Producto/Productofluxia"


const Home = () => {
  const imagenesLista= [
    "https://api.iconify.design/mdi:aws.svg?color=%23000000", 
    "https://api.iconify.design/logos:notion.svg?color=%23313372",
    "https://api.iconify.design/devicon-plain:azure-wordmark.svg?color=%23000000",
    "https://res.cloudinary.com/dfmsezslx/image/upload/v1708727801/TECDE/intercom-vector-logo-2022_p4m5in.png",
    "https://res.cloudinary.com/dfmsezslx/image/upload/v1708727301/TECDE/bubble_logo_wcqkfj.png",
    "https://res.cloudinary.com/dfmsezslx/image/upload/v1708729993/TECDE/github_okagny.png",
    "https://res.cloudinary.com/dfmsezslx/image/upload/v1708730247/TECDE/makers_vspylp.png",
    "https://res.cloudinary.com/dfmsezslx/image/upload/v1708730382/TECDE/ongoing-max_d1ohdm.png",
    "https://res.cloudinary.com/dfmsezslx/image/upload/v1708730383/TECDE/tec_dbjhby.jpg",
    "https://res.cloudinary.com/dfmsezslx/image/upload/v1708730531/TECDE/unal_wtsv0i.png"
  ]
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
        <Element>
          <Productofluxia />
        </Element>
        <Element>
          <Productoexia/>
        </Element>
        {/* <Element name="bannerPartner">
          <Tecnologias images={imagenesLista} />
        </Element> */}
        <Element name="bannerServicios">
          <BannerServicios/>
        </Element>
        <Element name="bannerCita">
          <BannerCita />
        </Element>
        </div>
        </>

    )
}

export default Home