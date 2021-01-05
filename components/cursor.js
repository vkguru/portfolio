import React from 'react'
import styles from '../styles/home.module.scss'

export default function Cursor() {

  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("mouseover", (e) => {
      const {clientX, clientY} = e;
      const mouseX = clientX - cursorRef.current.clientWidth * 2;
      const mouseY = clientY - cursorRef.current.clientHeight * 5;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
    })
  }, [])

  return (
    <div className={styles.cursor} ref={cursorRef}></div>
  )
}