import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        <div className={styles.menuLeft}>
          <img src="/logo.svg" alt="logo adriana langerie" />
          <a href="" className="link">Conjuntos</a>
          <a href="" className="link">T Shirts</a>
        </div>

        <div className={styles.menuRight}>
          <a href="#" className="link">
            <img src="whatsapp.svg" alt="whatsapp icon" />
            <p>Contate por whatsapp</p>
          </a>
        </div>

        <div className={styles.menuMobile}>
          
        </div>
      </nav>
    </header>
  );
}