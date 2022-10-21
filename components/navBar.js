import Link from 'next/link'
import Image from 'next/image'
export default function NavBar() {
    return(
        <nav>
            <Image
                src='/denver_banner.jpeg'
                alt='denver_banner'
                width={1000}
                height={300}
            />
            <Link href='/'>Home</Link>
            <Link href='/about'>About Me</Link>

        </nav>
    )
}