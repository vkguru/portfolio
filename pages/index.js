import Header from '../components/header'
import Nav from '../components/nav'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, fadeIn, fadeupHome, fadeupHomeTwo, fadeupHomeThree } from '../components/animate'
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
              <motion.h1 initial="hidden" animate="moveup" variants={fadeUp}>
                Hello, I am <br/> 
                <motion.span initial="hidden" animate="moveup" variants={fadeIn} className={styles.name}>
                  Victor Nwoguru
                </motion.span>
              </motion.h1>
            </div>
            <div className={styles.intro}>
              <motion.p initial="hidden" animate="moveup" variants={fadeupHome}>
                I am a constantly evolving frontend developer who is passionate about building scalable, beautiful, interactive and user friendly products.
                I am a life-long learner; which means that I constantly expose myself to relevant resources that keeps me abreast with updates in the industry. The technologies I have 
                used are JavaScript, Reactjs, Redux, Nextjs, Gatsby, Sass/Scss, Vuejs, Vuex to mention but a few.
              </motion.p>
            </div>
            <motion.div initial="hidden" animate="moveup" variants={fadeupHomeTwo} className={styles.cta}>
              <Link href="mailto:hello@vcreate.me"><a>Currently Open to Opportunities</a></Link>
            </motion.div>
            <motion.div initial="hidden" animate="moveup" variants={fadeupHomeThree} className={styles.social}>
              <Link href="https://github.com/vkguru">
                <a target="_blank">
                  <svg enableBackground="new 0 0 24 24" height="25" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"/></svg>
                </a>
              </Link>
              <Link href="https://twitter.com/vichukwu">
                <a target="_blank">
                  <svg enableBackground="new 0 0 24 24" height="25" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z" /></svg>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/victor-nwoguru/">
                <a target="_blank">
                  <svg height="25" viewBox="0 0 512 512" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" /></svg>
                </a>
              </Link>
              <Link href="https://www.instagram.com/victornwoguru/">
                <a target="_blank">
                  <svg height="25" viewBox="0 0 512 512" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m301 256c0 24.851562-20.148438 45-45 45s-45-20.148438-45-45 20.148438-45 45-45 45 20.148438 45 45zm0 0"/><path d="m332 120h-152c-33.085938 0-60 26.914062-60 60v152c0 33.085938 26.914062 60 60 60h152c33.085938 0 60-26.914062 60-60v-152c0-33.085938-26.914062-60-60-60zm-76 211c-41.355469 0-75-33.644531-75-75s33.644531-75 75-75 75 33.644531 75 75-33.644531 75-75 75zm86-146c-8.285156 0-15-6.714844-15-15s6.714844-15 15-15 15 6.714844 15 15-6.714844 15-15 15zm0 0"/><path d="m377 0h-242c-74.4375 0-135 60.5625-135 135v242c0 74.4375 60.5625 135 135 135h242c74.4375 0 135-60.5625 135-135v-242c0-74.4375-60.5625-135-135-135zm45 332c0 49.625-40.375 90-90 90h-152c-49.625 0-90-40.375-90-90v-152c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"/></svg>
                </a>
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  )
}
