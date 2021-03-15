import Header from '../components/header'
import Nav from '../components/nav'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp } from '../components/animate'
import styles from '../styles/home.module.scss'

export default function Contact() {

  return (
    <>
    <Header siteTitle = 'Works | Victor Nwoguru' />
    <div className={styles.landing}>
      <div className={styles.container}>
        <Nav />
        <motion.section className={styles.contact} initial="hidden" animate="moveup" variants={fadeUp}>

          <h2>Contact</h2>

          <div className={styles.socialC}>
            <p>I will love to have you connect with me. You can connect with me via;</p>
            <ul>
              <li><Link href="https://twitter.com/vichukwu"><a target="_blank">Twitter</a></Link></li>
              <li><Link href="https://www.linkedin.com/in/victor-nwoguru/"><a target="_blank">LinkedIn</a></Link></li>
              <li><Link href="https://github.com/vkguru"><a target="_blank">GitHub</a></Link></li>
              <li><Link href="mailto:hello@vcreate.me"><a target="_blank">Email</a></Link></li>
            </ul>
          </div>

        </motion.section>
      </div>
    </div>
    </>
  )
}