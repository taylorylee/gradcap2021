import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>"Taylor Lee's graduation cap"</title>
        <meta name="description" content="Class of 2021. We did it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Class of 2021 <a href="https://www.sdamustang.com/">We did it! 🎉</a>
        </h1>

        <p className={styles.description}>
          Taylor Lee's Graduation Cap 🎓{' '}
        </p>

        <div className={styles.grid}>
        <a className={styles.card}>
            <h2>Where am I headed off to? </h2>
            <p>Tentatively taking a gap year to work at Google and head off to the University of Auckland in New Zealand studying computer science and psychology!</p>
          </a>

          <a href="https://open.spotify.com/playlist/1YYHnjyRwjzfccSkkYtj6D?si=1894d187f2be48a6" className={styles.card}>
            <h2>21 songs for 2021 playlist &rarr;</h2>
            <p>Get hyped, cry, smile, maybe all of the above with this playlist.</p>
          </a>

          <a href="https://drive.google.com/drive/folders/1O5OrLeUsMUAvTLQEbniEFOimuzn0Fbil?usp=sharing" className={styles.card}>
            <h2>Blast to the past &rarr;</h2>
            <p>Some photos and videos from freshman to senior year.</p>
          </a>

           <a href="https://docs.google.com/document/d/1Swp17znRwFpl8nLgLuvk07obh7GLS6lN2cTyQA0Nz_4/edit?usp=sharing" className={styles.card}>
            <h2>Thank you to the following people... &rarr;</h2>
            <p>I couldn't have done it without you folks!</p>
          </a>

          <a
            href="https://drive.google.com/file/d/1jqLzHj7oG44B3jQK78uqGAxp8TjK3s7I/view?usp=sharing"
            className={styles.card} >
            <h2>I might have graduated, but... &rarr;</h2>
            <p>
              These people never got to because of gun violence. Use your voice and vote. Courtesy of Gina Warren.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Taylor Lee. June 9, 2021
        </a>
      </footer>
    </div>
  )
}
