
import { Navbar } from "../components/Navigation"
import { Main } from "../components/Main"
import { Sobre } from "../components/Sobre"
import { Projetos } from "../components/Projetos"
import { Habilidades } from "../components/Habilidades"


export default function Index(){

    return <>
    <div className="hero">
        <Navbar />
        <Main />
    </div>
        <Sobre />
    <div className="gradientBackground">
        <Projetos />
        <Habilidades />
    </div>
    </>
}