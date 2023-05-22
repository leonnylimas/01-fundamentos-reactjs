import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/leonnylimas.png" />
                    <div className={styles.authorInfo}>
                        <strong>Leone Lima</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='22 de maio 17:29h' dateTime="2023-05-22 17:29:30"> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>Acabei de subir mais um projeto no meu portifa. è um projeto que fiz no NLW Return, evento da Rocketseat.
                   o nome do projeto é DoctorCare.</p>
                <p><a href="#">jane.desing/docktorcare</a></p>
                <p><a href=""> #novoprojeto #nlw #rocketseat</a></p>
            </div>

        </article>
    )
}