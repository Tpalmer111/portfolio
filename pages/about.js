// import styles from '../styles/About.module.css'
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
            <div className={styles.name}>
                <h1>About me</h1>
            </div>
            <p>blah bLAH BLAH!</p>
            <p>I am a father, snowboarder, poker player, writer, amateur philosopher, and software engineer.</p>
        </div>
    )
}