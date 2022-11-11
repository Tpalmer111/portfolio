import styles from '../styles/Home.module.css'
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
            <p>Fill in the contact info here. linkedIn Github Email</p>

        </div>
    )
}