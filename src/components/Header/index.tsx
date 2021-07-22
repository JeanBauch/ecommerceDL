import { useState } from 'react'
import styles from './styles.module.scss';

export function Header() {
  const [navBarMobile, setNavBarMobile] = useState(false);

  const showNavBar = () => setNavBarMobile(!navBarMobile);

  return (
    <>
      <header className={styles.headerContainer}>
        <nav className={styles.navbar}>
          <div className={styles.menuLeft}>
            <img src="/logo.svg" alt="logo adriana langerie" />
            <a href="#" className={styles.link}>Conjuntos</a>
            <a href="#" className={styles.link}>T Shirts</a>
          </div>

          <div className={styles.menuRight}>
            <a href="#">
              <img src="whatsapp.svg" alt="whatsapp icon" />
              <p>Contate por whatsapp</p>
            </a>
          </div>

          <div className={styles.toggleMenu}>
            <input id={styles.menuMobile} type="checkbox" hidden onClick={showNavBar}></input>
            <label htmlFor={styles.menuMobile}>
              <div className={styles.menuMobile}/>
            </label>
          </div>
        </nav>
      </header>
      {navBarMobile && (
        <nav className={styles.openNav}>
          <div className={styles.openNavContent}>
            <a href="" className="link">Conjuntos</a>
            <a href="" className="link">T Shirts</a>
            <a href="#" className="link">Contate por whatsapp</a>
          </div>
        </nav>
      )}
    </>
  );
}