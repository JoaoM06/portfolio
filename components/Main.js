
import React from "react"
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import style from "../styles/Main.module.css"
import { easeInOut, motion } from "framer-motion"
import { useState } from "react";

export function Main(){
    const [intro] = useTypewriter({
        words: ["Olá, meu nome é"],
        typeSpeed: 80,
        deleteSpeed: 80,
        delaySpeed: 100
    })

    const [name] = useTypewriter({
        words: [" ", "João Araujo"],
        typeSpeed: 80,
        deleteSpeed: 80,
        delaySpeed: 100
    })

    const [skills] = useTypewriter({
        words: ["", "Web Developer Front-End", "Web Designer", "Gestor de Tráfego"],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 80,
        delaySpeed: 500
    })


    return <div className={style.container}>
        <article className={style.leftContent}>
            <h2>{intro}</h2>
            <h1>{name}</h1>
            <motion.h2 initial={{opacity: 0}} animate={{opacity: 100}} transition={{delay: 2.8}} >{skills}<Cursor /></motion.h2>
            <div className={style.btn}>
                <motion.button initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 5.4, duration: .4}} >Contato</motion.button>
            </div>
        </article>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: easeInOut, duration: .6}}>
            <aside className={style.rightContent}>
                <div className={style.imageContainer}><Image src="/Website Creator-bro.svg" alt="Ilustration by storyset" fill /></div>
            </aside>
        </motion.div>
    </div>
}