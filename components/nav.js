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
            <a>
              <Image src="/vcreate_logo.png" width={82} height={75} loading="eager" alt="Victor Nwoguru logo" />
            </a>
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
              <li><Link href="/"><a>About</a></Link></li>
              <li><Link href="/works"><a>Works</a></Link></li>
              <li><Link href="/"><a>Contact</a></Link></li>
            </ul>
          </div>
        </div>
        :
        ''
      }

      
    </>
  )
}