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
            <div className={styles.outer}>
                <div className={styles.card}>
                    <p>I am a father, snowboarder, poker player, table-top gamer, writer, amateur philosopher, audiophile, and software engineer.</p>
                </div>
                <div className={styles.card}>
                    <p>I love problem solving, strategy, creative expression, and finding adventure. I love discovering new places, new ideas, and new people.</p>
                </div>
                <p></p>
            </div>
        </div>
    )
}