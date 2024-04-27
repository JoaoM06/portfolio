
import styles from "../styles/Navgation.module.css"
import Image from "next/image"
import { easeInOut, motion } from "framer-motion"

export function Navbar(){

    return <motion.nav initial={{ y: -100}} animate={{ y: 0}} transition={{ ease: easeInOut, duration: .6}} className={styles.container}>
        <div className={styles.image}>
            <Image src="/images/logo-jma-branca.png" width={80} height={80} alt="Logo" />
        </div>
        <div className={styles.nav}>
            <a href="#">Portfolio</a>
            <a href="#">Sobre</a>
            <motion.button whileHover={{scale: 1.05}}>Contato</motion.button>
        </div>
    </motion.nav>
}
