import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image' 
export default function About() {
    return (
        <div  className={styles.container}>
            <Image
                className={styles.face}
                src='/face.jpeg'
                alt='head-shot'
                width={300}
                height={300}
            />
            <div className={styles.name}>
                <h1>Contact Me</h1>
            </div>
            <div className={styles.outer}>
                <div className={styles.card}>
                    <Link href="https://github.com/Tpalmer111">GitHub</Link>
                </div>
                <div className={styles.card}>
                    <Link href="https://www.linkedin.com/in/tim-palmer111/">LinkedIn</Link>
                </div>
                <div className={styles.card}>
                    <Link href="https://aemail.com/mwNO">Email</Link>
                </div>
            </div>
        </div>
    )
}