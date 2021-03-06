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
            <a href="https://wa.me/5515996312092" target="_blank">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.2969 18.7469C21.9563 18.5719 20.2594 17.7406 19.9438 17.6281C19.6282 17.5094 19.3969 17.4531 19.1688 17.8031C18.9375 18.15 18.2813 18.9219 18.075 19.1562C17.875 19.3875 17.6719 19.4156 17.3313 19.2437C15.3063 18.2312 13.9782 17.4375 12.6438 15.1469C12.2907 14.5375 12.9969 14.5813 13.6563 13.2656C13.7688 13.0344 13.7125 12.8375 13.625 12.6625C13.5375 12.4875 12.85 10.7937 12.5625 10.1031C12.2844 9.43125 11.9969 9.525 11.7875 9.5125C11.5875 9.5 11.3594 9.5 11.1282 9.5C10.8969 9.5 10.525 9.5875 10.2094 9.92813C9.8938 10.275 9.00317 11.1094 9.00317 12.8031C9.00317 14.4969 10.2375 16.1375 10.4063 16.3687C10.5813 16.6 12.8344 20.075 16.2938 21.5719C18.4813 22.5156 19.3375 22.5969 20.4313 22.4344C21.0969 22.3344 22.4688 21.6031 22.7532 20.7938C23.0375 19.9875 23.0375 19.2969 22.9532 19.1531C22.8688 19 22.6375 18.9125 22.2969 18.7469Z" fill="#B3B3B3"/>
                <path d="M28.9124 10.575C28.2062 8.89687 27.1937 7.39062 25.9031 6.09688C24.6124 4.80625 23.1062 3.79063 21.4249 3.0875C19.7062 2.36563 17.8812 2 15.9999 2H15.9374C14.0437 2.00938 12.2093 2.38438 10.4843 3.12188C8.81868 3.83438 7.32493 4.84687 6.04681 6.1375C4.76868 7.42812 3.76556 8.92813 3.07181 10.6C2.35306 12.3313 1.99056 14.1719 1.99993 16.0656C2.00931 18.2344 2.52806 20.3875 3.49993 22.3125V27.0625C3.49993 27.8563 4.14368 28.5 4.93743 28.5H9.69056C11.6156 29.4719 13.7687 29.9906 15.9374 30H16.0031C17.8749 30 19.6906 29.6375 21.3999 28.9281C23.0718 28.2313 24.5749 27.2313 25.8624 25.9531C27.1531 24.675 28.1687 23.1812 28.8781 21.5156C29.6156 19.7906 29.9906 17.9563 29.9999 16.0625C30.0093 14.1594 29.6406 12.3125 28.9124 10.575ZM24.1906 24.2625C21.9999 26.4313 19.0937 27.625 15.9999 27.625H15.9468C14.0624 27.6156 12.1906 27.1469 10.5374 26.2656L10.2749 26.125H5.87493V21.725L5.73431 21.4625C4.85306 19.8094 4.38431 17.9375 4.37493 16.0531C4.36243 12.9375 5.55306 10.0125 7.73743 7.80937C9.91868 5.60625 12.8343 4.3875 15.9499 4.375H16.0031C17.5656 4.375 19.0812 4.67812 20.5093 5.27812C21.9031 5.8625 23.1531 6.70312 24.2281 7.77812C25.2999 8.85 26.1437 10.1031 26.7281 11.4969C27.3343 12.9406 27.6374 14.4719 27.6312 16.0531C27.6124 19.1656 26.3906 22.0813 24.1906 24.2625Z" fill="#B3B3B3"/>
              </svg>
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
            <a href="https://wa.me/5515996312092" className="link">Contate por whatsapp</a>
          </div>
        </nav>
      )}
    </>
  );
}