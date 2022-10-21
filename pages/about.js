import styles from '../styles/About.module.css'
import Image from 'next/image' 
export default function About() {
    return (
        <div>

            <h1>About me</h1>
            <p className={styles.extraGreen}>Fill in the about me content here. blah blah blah</p>

            {/* <Image
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={300}
                height={300}
            /> */}
            <Image
            src='/face.jpeg'
            alt='head-shot'
            width={300}
            height={300}
            />
        </div>
    )
}