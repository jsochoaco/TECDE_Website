import Proposito from "../../components/Proposito/Proposito"
import NavBar from "../../components/NavBar/NavBar"
import style from "./Nosotros.module.css"



const Nosotros = () => {
    return (
        <>
        <div className={style.divContenedor}>
            <NavBar/>
            <Proposito/>
        </div>

        </>

    )
}

export default Nosotros