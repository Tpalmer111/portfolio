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

            <h1>Projects</h1>
            <p>Fill in project information here. project 1 - project 2 - project 3</p>

        </div>
    )
}