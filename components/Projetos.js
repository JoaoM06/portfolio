
import style from "../styles/Projetos.module.css"

export function Projetos(){

    return<div className={style.container}>
        <h2>Projetos</h2>
        <div className={style.card}>
            <div className={style.textContent}>
                <h3>Poda Carioca</h3>
                <p>Landing Page criada para receber o tráfego de uma campanha de pesquisa do Google Ads.</p>
                <div className={style.textContentIcons}>
                    <img src="/icons/js.png" alt="Logo JavaScript"></img>
                    <img src="/icons/html-5.png" alt="Logo JavaScript"></img>
                    <img src="/icons/css-3.png" alt="Logo JavaScript"></img>
                </div>
                <a href="https://www.podacarioca.com.br">podacarioca.com.br</a>
            </div>

            <div className={style.imgContent}>
                <img src="/images/hero-secttion-poda-carioca.png"></img>
            </div>
        </div>
    </div>
}