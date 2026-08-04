import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.column}>
            <div className={styles.brand}>
              <img src="/logo/Logotipo Oficial.jpg" alt="Toca das Patas" />
              <h3>Toca das Patas</h3>
            </div>
            <p>Clínica Veterinária & Pet Shop</p>
            <p>Com amor e profissionalismo</p>
          </div>

          <div className={styles.column}>
            <h4>Contato</h4>
            <p>
              <strong>Telefone:</strong> <br />
              <a href="tel:11940013488">(11) 94001-3488</a>
            </p>
            <p>
              <strong>Endereço:</strong> <br />
              Rua Catipará, 251 – Brooklin <br />
              São Paulo - SP, CEP 04561-060
            </p>
          </div>

          <div className={styles.column}>
            <h4>Redes Sociais</h4>
            <a href="https://instagram.com/tocadaspatas-brooklin" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://wa.me/5511940013488" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>

          <div className={styles.column}>
            <h4>Links Rápidos</h4>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre Luiza</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Toca das Patas. Todos os direitos reservados.</p>
          <p className={styles.disclaimer}>
            Consulte sempre um veterinário para diagnóstico profissional.
          </p>
        </div>
      </div>
    </footer>
  )
}
