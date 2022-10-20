import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flavim hello Next</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello <a>Next.js</a> ! <br></br> 
          Here is <a>Flavim</a>!!!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Testando &rarr;</h2>
            <p>Primeiros passos com esse framework.</p>
          </a>        
            
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Flavim
          
        </a>
      </footer>
    </div>
  )
}
