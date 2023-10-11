import Banner from "../../components/Banner/Banner"
import NavBar from "../../components/NavBar/NavBar"
import SecondBanner from "../../components/SecondBanner/Banner/SecondBanner"
import style from "./home.module.css"


const Home = () => {
    return (
        <>
        <div className={style.divContenedor}>
            <NavBar/>
            <Banner/>
            <SecondBanner/>
        </div>

        </>

    )
}

export default Home