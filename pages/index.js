
import { Navbar } from "../components/Navigation"
import { Main } from "../components/Main"
import { Sobre } from "../components/Sobre"
import { Projetos } from "../components/Projetos"


export default function Index(){

    return <>
    <div className="hero">
        <Navbar />
        <Main />
    </div>
        <Sobre />
        <Projetos />
    </>
}