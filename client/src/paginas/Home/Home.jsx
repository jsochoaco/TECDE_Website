import Banner from "../../components/Banner/Banner"
import SecondBanner from "../../components/SecondBanner/SecondBanner"
import Carousel from "../../components/SecondBanner/Carrousel"
import style from "./home.module.css"
import ThreeBanner from "../../components/ThreeBanner/ThreeBanner"


const Home = () => {
    return (
        <>
        <div className={style.divContenedor}>
            <Banner/>
            <SecondBanner/>
            <Carousel/>
            <ThreeBanner/>
        </div>

        </>

    )
}

export default Home