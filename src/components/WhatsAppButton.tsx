import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  const phoneNumber = '5511940013488'
  const message = encodeURIComponent(
    'Olá! Gostaria de informações sobre os serviços da Toca das Patas.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Contate-nos via WhatsApp"
      title="Abrir WhatsApp"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </a>
  )
}
