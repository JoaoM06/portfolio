
import style from "../styles/Projects.module.css"

export function Projects(){

    return<>
    <section className={style.container}>
        <h2>Projetos</h2>
        <div className={style.wrapper}>
            <article className={style.textContent}>
                <h3>Poda Carioca</h3>
                <p>Desenvolvimento de uma Landing Page e uma campanha de pesquisa no Google Ads para geração de Leads</p>
            </article>
            <aside className={style.aside}>
                
            </aside>
        </div>
    </section>
    </>
}