import Banner from "../../components/Banner/Banner"
import NavBar from "../../components/NavBar/NavBar"
import style from "./home.module.css"


const Home = () => {
    return (
        <>
        <div className={style.divContenedor}>
            <NavBar/>
            <Banner/>
        </div>

        </>

    )
}

export default Home