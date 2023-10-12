import Banner from "../../components/Banner/Banner"
import SecondBanner from "../../components/SecondBanner/Banner/SecondBanner"
import Carousel from "../../components/SecondBanner/Banner/Carrousel"
import style from "./home.module.css"


const Home = () => {
    return (
        <>
        <div className={style.divContenedor}>
            <Banner/>
            <SecondBanner/>
            <Carousel/>
        </div>

        </>

    )
}

export default Home