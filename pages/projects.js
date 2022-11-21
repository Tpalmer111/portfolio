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
                <h1>Code Projects</h1>
            </div>    
            <div className={styles.project}>
                <Link  href="https://tpalmer111.github.io/mini-mandala/">Mini-mandala</Link>
                <p>Mini-mandala is an adaptation of a awesome card game called Mandala. The game is built with vanilla javaScript utilizing DOM manipulation. A player collects points against a cpu player. There are three rounds of play and then a winner is declared.</p>
            </div>
            <div className={styles.project}>
                <Link 
                    href="https://reimagined-waddle-tpalmer111.koyeb.app/">Record-collector</Link>
                <p>The objective for project two was to create a full stack react application using SQL, React, and utilizes the LastFM api.  Users can use the app to search and access data for artists and albums. If a user registers for an account they can save a catalog of their entire record collection.</p>
            </div>
            <div className={styles.project}>
                <Link href="https://magnificent-mousse-4e7cf9.netlify.app/">Cafe Finder</Link>
                <p>Project three was a group project and the objective was to build a MERNstack application with a divided server and client, utilizing React, mongoose, and MongoDB. Cafe-finder is a specialized search engine that utilizes the Yelp api to render search results. Once a user registers for an account they can save their favorite cafes and comment on their experiences.</p>
            </div>
            <div className={styles.project}>
                <Link href="https://github.com/Tpalmer111/tournament_manager">Tournament Manager (github)</Link>
                <p>The objective for project four was to learn and use a new technology. Using React-Native, tournament manager allows a user to manage a poker tournament efficiently and effectively. There are settings for every aspect of a texas hold'em tournament. </p>
            </div>
        </div>
    )
}