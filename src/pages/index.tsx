import { useState, useRef } from 'react'
import Head from 'next/head'
import styles from './index.module.css'
import { useReveal, useScrollY } from '@/hooks/useReveal'

const googleReviews = [
  { name: 'Marcelo Vieira', timeAgo: 'há 6 meses', quote: 'Sou cliente a muitos anos, excelente serviço, variedade de produtos e remédios!' },
  { name: 'Marcelo Preisegalavicius', timeAgo: 'há 1 ano', quote: 'Para quem precisa de uma ótima veterinária e hotel para cães, super recomendo este local, a Dra. Luísa tratou meus dois pequenos como se fossem dela e ao retornar de 18 dias fora, estão felizes e animados, só tenho a agradecer por tanto carinho e cuidado! Vocês são incríveis 🥰' },
  { name: 'Natália Abreu', timeAgo: 'há 1 ano', quote: 'Sou fã desse lugar! O banho é ótimo, não é demorado e os pets ficam no maior conforto enquanto esperam a vez deles. Além disso, o atendimento é sempre cuidadoso, e a veterinária, Dra. Luísa, é excelente!' },
  { name: 'Silmara Boihagian', timeAgo: 'há 1 ano', quote: 'Muito carinho e cuidado com o banho da minha filhote. Voltarei!' },
  { name: 'Cinthia Carla dos Santos', timeAgo: 'há 2 anos', quote: 'Dra. Luísa é um amor! Minhas filhas de quatro patas amam, muito carinho e amor pelo que faz ❤️' },
  { name: 'Vany Laube', timeAgo: 'há 2 anos', quote: 'Amo a Luísa, veterinária raiz, muito conscienciosa, direta, como eu gosto!' },
  { name: 'Paulina Ortolan', timeAgo: 'há 2 anos', quote: 'Veterinária excelente, banho e tosa muito bom. Ótimos preços.' },
  { name: 'Marisa Nakaya Mendonça Gorgulho', timeAgo: 'há 2 anos', quote: 'A Toca das Patas é um pet excelente e a Dra. Luísa é a melhor veterinária da região, muito competente e séria.' },
  { name: 'Octavio Pupo Nogueira', timeAgo: 'há 3 anos', quote: 'Muito bom, pode contar com a Dra. Luísa sempre.' },
  { name: 'Camilla Castro', timeAgo: 'há 3 anos', quote: 'Sinto uma super segurança, só levo minha Lili neste local. A equipe passa muita segurança e sempre deixa minha filha lindíssima 🤩' },
  { name: 'Samir Salim', timeAgo: 'há 4 anos', quote: 'Ótimo atendimento e preços justo.' },
  { name: 'Anderson Oliveira', timeAgo: 'há 4 anos', quote: 'Atendimento de qualidade.' },
  { name: 'Regina Cabral', timeAgo: 'há 4 anos', quote: 'Ótimo. Carinho, atenção e confiança!' },
]

export default function Home() {
  const about = useReveal<HTMLDivElement>()
  const services = useReveal<HTMLDivElement>()
  const why = useReveal<HTMLDivElement>()
  const contact = useReveal<HTMLDivElement>()
  const scrollY = useScrollY()
  const reviewsRef = useRef<HTMLDivElement>(null)

  const scrollReviews = (direction: number) => {
    reviewsRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' })
  }

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', consent: false })
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  const setField = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = field === 'consent' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm((f) => ({ ...f, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'e0e509ae-9b7e-4425-97f7-c4ac5dc5851e',
          subject: 'Nova mensagem do site - Toca das Patas',
          from_name: 'Site Toca das Patas',
          name: form.name,
          email: form.email,
          phone: form.phone,
          tipo_de_servico: form.service,
          message: form.message,
          deseja_promocoes_whatsapp: form.consent ? 'Sim' : 'Não',
        }),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Toca das Patas | Clínica Veterinária & Pet Shop</title>
        <meta
          name="description"
          content="Clínica Veterinária e Pet Shop em São Paulo. Higiene, embelezamento e atendimento clínico veterinário profissional."
        />
      </Head>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <video
            poster="/logo/Logotipo Oficial.jpg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/hero-animation.webm" type="video/webm" />
            <source src="/videos/hero-animation.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay} style={{ transform: `translateY(${scrollY * 0.08}px)` }} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.kicker}>Clínica Veterinária &amp; Pet Shop</span>
          <h1>Bem-vindo à<br />Toca das Patas</h1>
          <p className={styles.heroSub}>Higiene, saúde e amor para seu melhor amigo.</p>
          <p className={styles.heroText}>
            Combinamos medicina veterinária de ponta com cuidado genuíno, porque saudade não é opção.
            Cada consulta, cada procedimento, feito com a atenção que seu pet merece.
          </p>
          <div className={styles.heroCtas}>
            <a
              href="https://wa.me/5511940013488?text=Olá! Gostaria de informações sobre seus serviços"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
            >
              Fale Conosco no WhatsApp
            </a>
            <a href="#servicos" className={styles.ctaSecondary}>Ver Serviços</a>
          </div>
        </div>
      </section>

      {/* Sobre Luísa */}
      <section id="sobre" className={styles.about}>
        <div ref={about.ref} className={`${styles.reveal} ${about.visible ? styles.revealVisible : ''} ${styles.aboutGrid}`}>
          <div className={styles.aboutImage}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop"
              alt="Dra. Luísa Esteves - Veterinária"
            />
          </div>
          <div className={styles.aboutText}>
            <span className={styles.eyebrow}>Conheça quem cuida do seu pet</span>
            <h2>Dra. Luísa Esteves</h2>
            <span className={styles.badge}>Médica Veterinária — CRMV-SP #12345</span>
            <p>
              Com 12 anos de experiência em clínica veterinária, Luísa é especializada em medicina preventiva
              e bem-estar animal. Apaixonada por pets desde criança, fundou a Toca das Patas para oferecer um
              espaço acolhedor onde cada animal recebe atenção personalizada.
            </p>
            <p className={styles.quote}>
              &quot;Com Luísa, seu pet não é apenas um paciente. É família. Cada consulta é feita com a atenção
              que você merecia receber.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* CTA strip 1 */}
      <section className={styles.ctaStripWrap}>
        <div className={styles.ctaStrip}>
          <div>
            <h3>Pronto para cuidar do seu pet?</h3>
            <p>Agende uma consulta ou tire suas dúvidas agora mesmo.</p>
          </div>
          <a
            href="https://wa.me/5511940013488?text=Olá! Gostaria de informações sobre seus serviços"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaStripBtn}
          >
            Fale no WhatsApp
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className={styles.services}>
        <div ref={services.ref} className={`${styles.reveal} ${services.visible ? styles.revealVisible : ''}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Nossos Serviços</span>
            <h2>Cuidado completo, do rotineiro ao especializado</h2>
            <p>Da rotina clínica à estética, cada serviço existe por um motivo — e explicamos qual é.</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5c-2.5 4.65-9.5 9-9.5 9z" />
                </svg>
              </div>
              <h3>Rotina do Pet</h3>
              <p>Exames periódicos, vacinação, verificação de saúde geral e controle de pulgas e carrapatos.</p>
              <p className={styles.cardNote}>Pulgas e carrapatos transmitem doenças graves — prevenimos antes que apareçam e tratamos rapidamente se já estiverem presentes.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11a8 8 0 0 0 16 0" />
                  <path d="M4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" />
                  <path d="M12 4v3" />
                </svg>
              </div>
              <h3>Suplementos e Ração</h3>
              <p>Rações e suplementos alimentares de alta qualidade para cães e gatos de todas as idades.</p>
              <p className={styles.cardNote}>Nutrição adequada é a base da saúde, do peso e da energia do seu pet.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="3" />
                  <path d="M12 10v3c0 3.3 2.7 6 6 6h1" />
                </svg>
              </div>
              <h3>Acessórios para Pets</h3>
              <p>Coleiras, guias, brinquedos, tapetes higiênicos e muito mais para o dia a dia do seu companheiro.</p>
              <p className={styles.cardNote}>Itens de qualidade garantem conforto e segurança em cada passeio.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>Castração/Esterilização</h3>
              <p>Procedimento seguro que previne tumores e controla a população.</p>
              <p className={styles.cardNote}>Reduz risco de tumores mamários e uterinos.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10V6a2 2 0 0 0-2-2h-4l-8 8 6 6 8-8z" />
                  <circle cx="14" cy="8" r="1.1" />
                </svg>
              </div>
              <h3>Chip de Identificação</h3>
              <p>Aumenta as chances de reunir seu pet com você, se perdido.</p>
              <p className={styles.cardNote}>Identificação permanente, indolor e vitalícia.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="2.2" />
                  <circle cx="6" cy="18" r="2.2" />
                  <path d="M8 8l11 11M19 5L8 16" />
                </svg>
              </div>
              <h3>Tosa Higiênica</h3>
              <p>Previne infecções de pele e acúmulo de parasitas.</p>
              <p className={styles.cardNote}>Pelagem desorganizada aumenta risco de infecção.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4c-2.2 0-4 1.4-4 3.6 0 1.4.5 2 .8 3.4.4 1.8.6 5 1.6 8 .5 1.4 1.6 1.4 2-.2.4-1.6.8-3 1.6-3s1.2 1.4 1.6 3c.4 1.6 1.5 1.6 2 .2 1-3 1.2-6.2 1.6-8 .3-1.4.8-2 .8-3.4C20 5.4 18.2 4 16 4c-1.2 0-2 .6-2.6 1-.6-.4-1.2-1-1.4-1z" />
                </svg>
              </div>
              <h3>Higiene Oral Profissional</h3>
              <p>Remove tártaro e previne doenças periodontais.</p>
              <p className={styles.cardNote}>Sem higiene dental, cães podem desenvolver problemas cardíacos.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Adote seu Pet!</h3>
              <p>Resgate e adoção: damos uma chance de lar a animais que precisam.</p>
              <p className={styles.cardNote}>A Toca das Patas trabalha em parceria com equipes de resgate para conectar pets ao amor que merecem.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>Hotelzinho para Pets</h3>
              <p>Day use ou pernoite: seu pet fica seguro e bem cuidado enquanto você viaja.</p>
              <p className={styles.cardNote}>Cuidados especiais e medicação contínua durante toda a estada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip 2 */}
      <section className={styles.ctaStripGoldWrap}>
        <h3>Higiene oral em dia, coração protegido</h3>
        <p>Cães sem cuidado dental podem desenvolver problemas cardíacos. Agende a avaliação do seu pet hoje.</p>
        <a
          href="https://wa.me/5511940013488?text=Olá! Quero agendar uma avaliação de higiene oral para meu pet"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaGoldBtn}
        >
          Quero agendar
        </a>
      </section>

      {/* Por que escolher + Depoimentos */}
      <section className={styles.why}>
        <div ref={why.ref} className={`${styles.reveal} ${why.visible ? styles.revealVisible : ''}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Por que a Toca das Patas</span>
            <h2>Diferenciais que fazem sentido</h2>
          </div>

          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <h3>Profissionalismo</h3>
              <p>Veterinária formada, com mais de 10 anos de experiência clínica.</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Amor aos Animais</h3>
              <p>Cada pet recebe atenção individualizada e cuidado genuíno.</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Ambiente Acolhedor</h3>
              <p>Espaço limpo, seguro e confortável para seu melhor amigo.</p>
            </div>
            <div className={styles.reasonCard}>
              <h3>Educação do Tutor</h3>
              <p>Explicamos a importância de cada serviço e cuidado preventivo.</p>
            </div>
          </div>

          <div id="depoimentos" className={styles.sectionHead}>
            <span className={styles.eyebrow}>Depoimentos</span>
            <h2>Quem confia, indica</h2>
            <p>Avaliações reais de clientes no Google.</p>
          </div>

          <div className={styles.testimonialsCarouselWrap}>
            <button
              type="button"
              className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
              onClick={() => scrollReviews(-1)}
              aria-label="Ver avaliação anterior"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className={styles.testimonialsGrid} ref={reviewsRef}>
              {googleReviews.map((t, i) => (
                <div key={i} className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>&quot;{t.quote}&quot;</p>
                  <div className={styles.testimonialAuthor}>
                    <span className={styles.avatar}>{t.name.charAt(0)}</span>
                    <div>
                      <div className={styles.testimonialName}>{t.name}</div>
                      <div className={styles.testimonialPet}>Avaliação no Google · {t.timeAgo}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
              onClick={() => scrollReviews(1)}
              aria-label="Ver próxima avaliação"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA strip 3 */}
      <section className={styles.ctaStripSageWrap}>
        <h3>Seu pet merece esse cuidado</h3>
        <p>Fale com a gente agora e marque o primeiro atendimento.</p>
        <a
          href="https://wa.me/5511940013488?text=Olá! Gostaria de marcar um atendimento"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaSageBtn}
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* Contato e Mapa */}
      <section id="contato" className={styles.contact}>
        <div ref={contact.ref} className={`${styles.reveal} ${contact.visible ? styles.revealVisible : ''}`}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrowLight}>Fale Conosco</span>
            <h2 className={styles.headingLight}>Localização &amp; Contato</h2>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <strong>Endereço</strong>
                <p>Rua Catipará, 251 – Brooklin Paulista<br />São Paulo - SP, CEP 04561-060</p>
              </div>
              <div className={styles.infoItem}>
                <strong>WhatsApp</strong>
                <a href="https://wa.me/5511940013488" target="_blank" rel="noopener noreferrer">(11) 94001-3488</a>
              </div>
              <div className={styles.infoItem}>
                <strong>Instagram</strong>
                <a href="https://instagram.com/tocadaspatas-brooklin" target="_blank" rel="noopener noreferrer">
                  @tocadaspatas-brooklin
                </a>
              </div>
              <div className={styles.infoItemLast}>
                <strong>Horário</strong>
                <p>Seg – Sex: 9h às 18h<br />Sábado: 9h às 13h</p>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.1234567890!2d-46.5850!3d-23.5960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5c5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sRua%20Catip%C3%A1ra%2C%20251%20-%20Brooklin%2C%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.formSuccess}>
                  <h3>Mensagem enviada!</h3>
                  <p>Obrigado pelo contato. Retornaremos em breve pelo WhatsApp ou e-mail.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <input type="text" placeholder="Nome completo" value={form.name} onChange={setField('name')} required />
                    <input type="email" placeholder="E-mail" value={form.email} onChange={setField('email')} required />
                  </div>
                  <div className={styles.formRow}>
                    <input type="tel" placeholder="Telefone / WhatsApp" value={form.phone} onChange={setField('phone')} required />
                    <select value={form.service} onChange={setField('service')}>
                      <option value="">Tipo de serviço</option>
                      <option value="consulta">Consulta</option>
                      <option value="tosa">Tosa</option>
                      <option value="vacinacao">Vacinação</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <textarea placeholder="Mensagem" value={form.message} onChange={setField('message')} rows={4} />
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" checked={form.consent} onChange={setField('consent')} />
                    Desejo receber promoções via WhatsApp
                  </label>
                  {status === 'error' && (
                    <p className={styles.formError}>
                      Não foi possível enviar sua mensagem. Tente novamente ou fale conosco pelo WhatsApp.
                    </p>
                  )}
                  <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
