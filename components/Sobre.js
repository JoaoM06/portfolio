
import style from "../styles/Sobre.module.css"
import Image from "next/image"
import { motion } from "framer-motion"

export function Sobre(){

    return<motion.div initial={{ x: -1500 }} animate={{ x: 0 }} transition={{ duration: 1.5}} className={style.container}>
        <div className={style.content}>
            <div className={style.textContent}>
                <h2>Sobre mim</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum dignissim vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin non metus placerat, porta turpis at, sollicitudin massa.</p>
            </div>
            <div className={style.image}>
                <img src="images/profile img.png" alt="Foto de perfil" />
            </div>
        </div>
    </motion.div>
}