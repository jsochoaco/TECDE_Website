import BannerCita from "../../components/BaneerCita/BannerCita"
import FounderCarousel from "../../components/Founders/Founders"
import Proposito from "../../components/Proposito/Proposito"
import style from "./Nosotros.module.css"

const Nosotros = () => {
    return (
        <>
        <div className={style.divContenedor}>
            <Proposito/>
            <FounderCarousel/>
            <BannerCita/>
        </div>
        </>
    )
}
export default Nosotros