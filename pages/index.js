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
                I am a constantly evolving frontend developer who is passionate about building scalable, beautiful, interactive and user friendly web apps.
                I am a life-long learner which means that I constantly expose myself to resources so as stay relevant in the industry. The technologies I have 
                used are JavaScript(ES6+), Reactjs, Nextjs, Vuejs, Vuex and still counting...
              </p>
            </div>
            <div className={styles.cta}>
              <Link href="mailto:hello@vcreate.me"><a>Currently Open to Opportunities</a></Link>
            </div>
            <div className={styles.social}>
              <svg enableBackground="new 0 0 24 24" height="25" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" fill="#fff"/></svg>
              <svg enable-background="new 0 0 24 24" height="25" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m21.534 7.113c.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.401.11-.837.162-1.29.162-.315 0-.633-.018-.931-.084.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 8.683 0 14.342-7.244 13.986-14.637z" fill="#fff" /></svg>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
