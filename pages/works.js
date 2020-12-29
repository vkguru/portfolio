import Header from '../components/header'
import Nav from '../components/nav'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Header siteTitle = 'Works | Victor Nwoguru' />
      <div className={styles.landing}>
        <div className={styles.container}>
          <Nav />
          <section className={styles.works}>
            <p>Here are a few projects I have worked on</p>

            <div className={styles.portfolio}>
              <div></div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}