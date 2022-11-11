import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function NavBar() {
    return(
        
            <nav>
                <Image
                    src='/denver_banner.jpeg'
                    alt='denver_banner'
                    width={1500}
                    height={300}
                />
                <div className={styles.navigation}>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About Me</Link>
                    <Link href='/projects'>Projects</Link>
                    <Link href='/contact'>Contact Me</Link>
                </div>
            </nav>
        
    )
}