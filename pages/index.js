import Header from '../components/header'
import Nav from '../components/nav'
import Link from 'next/link'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Header siteTitle = 'Victor Nwoguru | Front-End Developer' />
      <div className={styles.landing}>
        <div className={styles.container}>
          <Nav />
          <section className={styles.self}>
            <div className={styles.intro}>
              <h1>Hello, I am <br/> <span className={styles.name}>Victor Nwoguru</span></h1>
            </div>
            <div className={styles.intro}>
              <p>
                I am a frontend developer who is a passionate about building scalable products that solves human problems.
                I am a frontend developer who is a passionate about building scalable products that solves human problems.
                I am a frontend developer who is a passionate about building scalable products that solves human problems.
              </p>
            </div>
            <Link href="mailto:hello@vcreate.me" className={styles.cta}>Send a mail</Link>
          </section>
        </div>
      </div>
    </>
  )
}
