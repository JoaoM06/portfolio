
import { Navbar } from "../components/Navigation"
import { Main } from "../components/Main"
import { Projects } from "../components/Projects"


export default function Index(){

    return <>
    <div className="hero">
        <Navbar />
        <Main />
    </div>
    <Projects />
    </>
}