import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Tim's Portfolio`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="face">
        <Image
            className={styles.face}
            src='/face.jpeg'
            alt='head-shot'
            width={300}
            height={300}
        />
      </div>
      <h1 >Timothy A Palmer</h1>
      <p>Full-stack Developer</p>
    </div>
  )
}
