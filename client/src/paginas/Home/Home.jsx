import style from "./home.module.css"
import Banner from "../../components/Banner/Banner"
import SecondBanner from "../../components/SecondBanner/SecondBanner"
import BannerCita from "../../components/BaneerCita/BannerCita"
import BannerPartner from "../../components/Partner/Partner"
import BannerServicios from "../../components/Servicios/ServiciosBanner"


const Home = () => {
    return (
        <>
        <div className={style.divContenedor}>
            <Banner/>
            <SecondBanner/>
            <BannerPartner/>
            <BannerServicios/>
            <BannerCita/>
        </div>
        </>

    )
}

export default Home