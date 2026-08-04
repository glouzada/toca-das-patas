import { useState } from 'react'
import Head from 'next/head'
import styles from './index.module.css'
import { useReveal, useScrollY } from '@/hooks/useReveal'

const testimonials = [
  { name: 'Marina T.', pet: 'tutora do Thor', quote: 'A Dra. Luiza explicou cada detalhe do procedimento do meu cachorro. Nunca me senti tão segura deixando ele em uma clínica.' },
  { name: 'Rafael C.', pet: 'tutor da Mel', quote: 'A tosa higiênica virou rotina aqui em casa. A Mel sai sempre cheirosa e a equipe é super atenciosa.' },
  { name: 'Camila P.', pet: 'tutora do Bento', quote: 'Descobrimos um problema no exame de rotina antes que virasse algo sério. Só tenho a agradecer.' },
]

export default function Home() {
  const about = useReveal<HTMLDivElement>()
  const services = useReveal<HTMLDivElement>()
  const why = useReveal<HTMLDivElement>()
  const contact = useReveal<HTMLDivElement>()
  const scrollY = useScrollY()

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
          <img
            src="/logo/Logotipo Oficial.jpg"
            alt="Toca das Patas"
            className={styles.heroLogo}
          />
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

      {/* Sobre Luiza */}
      <section id="sobre" className={styles.about}>
        <div ref={about.ref} className={`${styles.reveal} ${about.visible ? styles.revealVisible : ''} ${styles.aboutGrid}`}>
          <div className={styles.aboutImage}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop"
              alt="Dra. Luiza Santos - Veterinária"
            />
          </div>
          <div className={styles.aboutText}>
            <span className={styles.eyebrow}>Conheça quem cuida do seu pet</span>
            <h2>Dra. Luiza Santos</h2>
            <span className={styles.badge}>Médica Veterinária — CRMV-SP #12345</span>
            <p>
              Com 12 anos de experiência em clínica veterinária, Luiza é especializada em medicina preventiva
              e bem-estar animal. Apaixonada por pets desde criança, fundou a Toca das Patas para oferecer um
              espaço acolhedor onde cada animal recebe atenção personalizada.
            </p>
            <p className={styles.quote}>
              &quot;Com Luiza, seu pet não é apenas um paciente. É família. Cada consulta é feita com a atenção
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
              <h3>Rotina do Cachorro</h3>
              <p>Exames periódicos, vacinação, verificação de saúde geral e controle de pulgas e carrapatos.</p>
              <p className={styles.cardNote}>Pulgas e carrapatos transmitem doenças graves — prevenimos antes que apareçam e tratamos rapidamente se já estiverem presentes.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.cardIcon}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#566B53" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h4l2 7 4-14 2 7h4" />
                </svg>
              </div>
              <h3>Exames Diagnósticos</h3>
              <p>Ultrassom, raio-x e análises laboratoriais completas.</p>
              <p className={styles.cardNote}>Diagnóstico precoce muda o rumo do tratamento.</p>
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
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>&quot;{t.quote}&quot;</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.avatar}>{t.name.charAt(0)}</span>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialPet}>{t.pet}</div>
                  </div>
                </div>
              </div>
            ))}
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
                <a href="tel:5511940013488">(11) 94001-3488</a>
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
