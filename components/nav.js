import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import navStyles from '../components/nav.module.scss'

export default function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [hambuger, sethambuger] = useState(false);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const hambugerControl = () => {
    sethambuger(!hambuger);
  }

  return (
    <>
      <nav className={navStyles.nav}>
        <div className={navStyles.logo}>
          <Link href="/">
            <Image src="/vcreate-logo.png" width={300} height={100} loading="eager" alt="Victor Nwoguru logo" />
          </Link>
        </div>
        <div className={navStyles.menu}>
          <div className={navStyles.hambuger} onClick={openMenu}>
            <span className={navStyles.startbar}></span>
            <span className={navStyles.centerbar}></span>
            <span className={navStyles.endbar}></span>
          </div>
        </div>
      </nav>

      {menuOpen === true? 
        <div className={navStyles.menuOpen}>
          <div className={navStyles.menuList}>
            <ul>
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Works</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>
        </div>
        :
        ''
      }

      
    </>
  )
}