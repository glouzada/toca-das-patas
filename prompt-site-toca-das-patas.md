===================================================================================
PROMPT: CRIAÇÃO DO SITE TOCA DAS PATAS
===================================================================================

## CONTEXTO DO PROJETO

Você está criando um site profissional, moderno e persuasivo para um pet shop 
chamado "Toca das Patas", localizado em São Paulo. O objetivo é converter 
visitantes em clientes através de CTAs claros (botão WhatsApp flutuante).

---

## DADOS DO CLIENTE

**Proprietária & Veterinária:**
- Nome: Luiza Santos (dados ficticios, a ser substituído)
- Formação: Médica Veterinária - CRMV-SP #12345 (fictício)
- Bio: "Com 12 anos de experiência em clínica veterinária, Luiza é especializada 
  em medicina preventiva e bem-estar animal. Apaixonada por pets desde criança, 
  fundou a Toca das Patas para oferecer um espaço acolhedor onde cada animal 
  recebe atenção personalizada."
- Foto: Use uma foto fictícia profissional de veterinária (será substituída depois)

**Negócio: Toca das Patas**
- Endereço: Rua Catipará, 251 – Brooklin Paulista, São Paulo - SP, CEP 04561-060
- Instagram: @tocadaspatas-brooklin
- WhatsApp: 11-94001-3488
- Logotipo: "Logotipo Oficial.jpg" (usar paleta de cores deste arquivo)
- Serviços Principais: Higiene, Embelezamento, Atendimento Clínico Veterinário

---

## SERVIÇOS A INCLUIR

### Especialidades Clínicas (com descrição educacional):
1. **Rotina do Cachorro** — Exames periódicos, vacinação e verificação de saúde geral
2. **Exames Diagnósticos** — Ultrassom, raio-x, análises laboratoriais
3. **Castração/Esterilização** — Procedimento seguro que previne tumores e controla população
4. **Chip de Identificação** — Aumenta chances de reunir pet com tutor se perdido
5. **Atendimento de Emergência** — Pronto para situações urgentes

### Serviços de Valor Agregado:
1. **Tosa Higiênica** — Previne infecções de pele e acumulo de parasitas
2. **Banho Medicado** — Tratamento especializado para problemas dermatológicos
3. **Higiene Oral Profissional** — Remove tártaro e previne doenças periodontais 
   (evita infecções, perda de dentes, problemas cardíacos)
4. **Limpeza de Ouvido** — Previne otites e inflamações

### Enfatizar Importância (em cada serviço):
- Higiene oral: "Cães sem higiene dental desenvolvem problemas cardíacos e podem 
  perder dentes aos 5 anos"
- Tosa: "Pelagens desorganizadas acumulam sujeira e aumentam risco de infecções de pele"
- Vacinação: "Vacinação em dia evita doenças graves e até fatais"

---

## ESTRUTURA DO SITE (Seções)

1. **Hero/Banner** 
   - Imagem grande, profissional (pet happy com veterinária)
   - Headline: "Bem-vindo à Toca das Patas — Clínica Veterinária & Pet Shop"
   - Subheadline: "Higiene, Saúde e Amor para seu melhor amigo"
   - CTA Principal: "Fale Conosco no WhatsApp" (botão destacado)

2. **Sobre a Luiza (Seção Diferencial)**
   - Foto profissional (fictícia, será trocada)
   - Nome, título, credenciais
   - Bio com destaques: experiência, paixão, filosofia de cuidado
   - Badge: "Veterinária Formada pela USP" (fictício, será validado)

3. **Serviços (Cards/Grid)**
   - 4-6 cards com ícone, título, descrição curta, "Saiba Mais"
   - Destaque em valor agregado: "Por que higiene oral é importante"
   - Cada card tem hover effect, cores da marca

4. **Por Que Escolher a Toca das Patas?**
   - Diferenciais: profissionalismo, amor aos animais, tecnologia, ambiente acolhedor
   - Testimonials/Reviews (fictícios, a validar depois)
   - Garantia: ambiente seguro, sanitização rigorosa

5. **Localização & Contato**
   - Google Maps embedded mostrando endereço
   - Formulário de contato (nome, email, telefone, mensagem, tipo de serviço)
   - Ícones de contato: WhatsApp, telefone, email, endereço
   - Horário de funcionamento (fictício, a validar)

6. **CTA Flutuante**
   - Botão WhatsApp no canto inferior direito
   - Ativo em todas as páginas
   - Abre chat direto: "Olá! Gostaria de informações sobre seus serviços"

7. **Rodapé**
   - Dados de contato
   - Links rápidos
   - Redes sociais (Instagram)
   - Disclaimer/Politica de privacidade

---

## REQUISITOS DE DESIGN

**Paleta de Cores:**
- Usar cores do logotipo "Logotipo Oficial.jpg"
- Sugerir: tons quentes (terra/marrom), azul profissional, brancos/cinzas neutros
- Acessibilidade: bom contraste, WCAG AA mínimo

**Tipografia:**
- Sans-serif moderna (ex: Inter, Poppins) para corpo
- Serif elegante (ex: Playfair Display) para títulos (opcional)
- Legibilidade em mobile

**Fotografia:**
- Profissional, acolhedora, com animais felizes
- Veterinária com pacientes (fictícia temporariamente)
- Ambiente clínico limpo e moderno
- Fotos genéricas baixadas legalmente (Unsplash, Pexels)

**Responsividade:**
- Mobile-first approach
- Desktop, tablet, celular funcionando perfeitamente

---

## REQUISITOS TÉCNICOS (Prototipo)

- **Framework**: Next.js + React (ou HTML puro se preferir simplicidade, mas Next.js é recomendado)
- **Hospedagem Final**: Vercel
- **Estrutura de Pastas**: 
  ```
  toca-das-patas/
  ├── public/
  │   ├── logo/
  │   │   └── Logotipo Oficial.jpg
  │   ├── images/
  │   │   ├── veterinary/
  │   │   ├── services/
  │   │   └── hero/
  │   └── icons/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   └── styles/
  ├── README.md
  └── package.json
  ```

- **Responsividade**: Prototipo em desktop primeiro, depois mobile
- **SEO Básico** (neste prototipo, otimizações futuras): title, meta description, headings estruturados
- **Performance**: Otimização de imagens, lazy loading

---

## MENSAGEM / COPY (Persuasiva)

**Tone of Voice:**
- Profissional, caloroso, confiável
- Não é corporativo frio; é "sua veterinária que se importa"
- Educacional: explica POR QUÊ cada serviço é importante

**Exemplos de Copy:**

*Hero:*
"Seu melhor amigo merece o melhor cuidado. Na Toca das Patas, combinamos 
medicina veterinária de ponta com amor genuíno — porque saudade não é opção."

*Higiene Oral:*
"Sabia que cães sem higiene dental podem desenvolver doenças cardíacas? 
Higiene oral profissional não é luxo — é prevenção."

*Seção de Diferencial:*
"Com Luiza, seu pet não é apenas um paciente. É família. Cada consulta, 
cada procedimento é feito com a atenção que você merecia receber."

---

## FORMULÁRIO DE CONTATO

Campos:
- Nome completo
- Email
- Telefone/WhatsApp
- Tipo de serviço (dropdown: Consulta, Tosa, Vacinação, Outro)
- Mensagem
- Checkbox: "Desejo receber promoções via WhatsApp"

Validação: frontend + backend
Envio: para email da Luiza + confirmação ao cliente

---

## GOOGLE MAPS

- Embed maps mostrando: Rua Catipará, 251 – Brooklin Paulista
- Modo escuro/claro (match com tema do site)
- Clicável para abrir em Google Maps

---

## ARQUIVO DE IMAGENS A BAIXAR (Genéricas)

Baixar legalmente de Unsplash/Pexels:
1. Veterinária examinando cachorro (perfil/hero)
2. Cachorro feliz em clínica (hero)
3. Banho de pet/tosa
4. Ultrassom veterinário
5. Chip de identificação (conceito)
6. Consultório veterinário limpo

*Armazenar em: `public/images/`*

---

## DIFERENCIAIS A ENFATIZAR

✓ Veterinária Formada (credibilidade)
✓ Ambiente Acolhedor (conforto para pet)
✓ Serviços Integrados (clínica + estética + higiene)
✓ Educação do Tutor (explica importância dos serviços)
✓ Disponibilidade (WhatsApp sempre aberto)
✓ Localização Estratégica (Brooklin, fácil acesso)

---

## PRÓXIMOS PASSOS (após prototipo aprovado)

1. Validar dados reais da Luiza + fotos profissionais
2. Atualizar serviços com especialidades confirmadas
3. Otimização para SEO (keywords, schema, meta tags)
4. Integração de sistema de agendamento (futuro)
5. Analytics (Google Analytics 4)
6. Testes A/B em CTAs

---

FIM DO PROMPT
