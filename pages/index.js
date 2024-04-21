
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
    <script src="https://kit.fontawesome.com/9deb3ef155.js" crossorigin="anonymous"></script>
    </>
}