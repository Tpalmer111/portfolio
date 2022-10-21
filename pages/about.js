import styles from '../styles/About.module.css'
import Image from 'next/image' 
export default function About() {
    return (
        <div>
                <Image
                src='/denver_banner.jpeg'
                alt='denver_banner'
                width={1000}
                height={300}
            />
            <h1>About me</h1>
            <p className={styles.extraGreen}>Fill in the about me content here. blah blah blah</p>

            <Image
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={300}
                height={300}
            />
        </div>
    )
}