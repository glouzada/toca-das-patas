import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo/Logotipo Oficial.jpg" alt="Toca das Patas" width={52} height={52} />
          <span className={styles.brandName}>Toca das Patas</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <Link href="#sobre" onClick={close}>Sobre</Link>
          <Link href="#servicos" onClick={close}>Serviços</Link>
          <Link href="#depoimentos" onClick={close}>Depoimentos</Link>
          <Link href="#contato" onClick={close}>Contato</Link>
          <a
            href="https://wa.me/5511940013488?text=Olá! Gostaria de informações sobre seus serviços"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            WhatsApp
          </a>
        </nav>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
