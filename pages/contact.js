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
                <h1>Contact Me</h1>
            <div className={styles.contact}>
                <Link href="https://github.com/Tpalmer111">Github</Link>
                <Link href="https://www.linkedin.com/in/tim-palmer111/">linkedIn</Link>
            </div>
        </div>
    )
}