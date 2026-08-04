===================================================================================
BRIEFING COMPLETO — SITE TOCA DAS PATAS (para teste comparativo com outra IA)
===================================================================================

Este documento descreve, em detalhe, um site já construído e no ar, para que outra
IA o recrie do zero a partir apenas desta descrição. O objetivo é comparar o
resultado das duas IAs para o mesmo briefing — portanto, seja literal e completo,
não invente liberdades além do que está descrito aqui.

-----------------------------------------------------------------------------------
## 1. CONTEXTO E OBJETIVO
-----------------------------------------------------------------------------------

Site institucional de página única (one-page) para um pet shop com atendimento
veterinário, com forte apelo de conversão: o visitante deve ser conduzido, o tempo
todo, a entrar em contato via WhatsApp ou preencher o formulário de contato. Não é
uma página estática de "empresa existe" — é uma peça de vendas.

Tom de voz: profissional, caloroso, confiável. Não é corporativo frio. É educativo —
explica o "porquê" de cada serviço (ex.: por que higiene oral importa), sem soar
alarmista.

-----------------------------------------------------------------------------------
## 2. DADOS DO NEGÓCIO
-----------------------------------------------------------------------------------

- Nome: Toca das Patas
- Tipo: Clínica Veterinária & Pet Shop
- Proprietária/veterinária: Dra. Luiza Santos — Médica Veterinária, CRMV-SP #12345
  (12 anos de experiência, especializada em medicina preventiva e bem-estar animal)
- Endereço: Rua Catipará, 251 – Brooklin Paulista, São Paulo - SP, CEP 04561-060
- WhatsApp: (11) 94001-3488 → todos os links de telefone do site devem apontar para
  `https://wa.me/5511940013488` (com mensagem pré-preenchida quando fizer sentido),
  **nunca** para `tel:`. Isso é uma regra fixa do projeto, sem exceção.
- Instagram: @tocadaspatas-brooklin
- Horário: Segunda a sexta, 9h às 18h — Sábado, 9h às 13h

-----------------------------------------------------------------------------------
## 3. IDENTIDADE VISUAL
-----------------------------------------------------------------------------------

Paleta (baseada no logotipo oficial: verde-sálvia, dourado, tons de madeira/couro):

- Verde primário: `#7C9678`
- Verde primário profundo: `#566B53`
- Dourado/secundário: `#C19A4B`
- Verde escuro/accent: `#3F4F3C`
- Creme claro (fundo): `#F5F0E3`
- Creme alternativo: `#EFE8D6`
- Marrom escuro quase preto (texto de destaque/rodapé): `#2B2418`
- Texto padrão: `#463D2F`
- Bordas/hairlines: `#D8CFB8`

Tipografia:
- Títulos (h1–h6): fonte serifada — **Lora**
- Corpo de texto: fonte sans-serif humanista — **Karla**

Elementos de estilo recorrentes:
- Cards com um canto cortado (clip-path diagonal), não cantos 100% arredondados —
  dá um toque orgânico/artesanal sem ser rústico demais
- Ícones lineares (outline, stroke fino, ~1.8px), sem preenchimento, cor
  `#566B53`, um por card de serviço
- Botões em formato pílula (border-radius total)
- Selos/badges em formato pílula com fundo dourado
- Pequenos rótulos "eyebrow" (uppercase, letter-spacing largo, cor dourada) acima
  de cada título de seção
- Sombras suaves, nunca duras; sem gradientes chamativos

-----------------------------------------------------------------------------------
## 4. ESTRUTURA DA PÁGINA (ordem exata das seções)
-----------------------------------------------------------------------------------

### 4.1 — Header (fixo no topo, sticky)
- Logo + nome "Toca das Patas" à esquerda
- Menu: Sobre | Serviços | Depoimentos | Contato (links âncora para as seções)
- Botão "WhatsApp" destacado (verde WhatsApp #25D366) sempre visível
- Em mobile: menu vira hambúrguer

### 4.2 — Hero
- Um vídeo em loop (mudo, autoplay, sem controles) do lado esquerdo/centro,
  mostrando uma animação de marca — com uma imagem estática (a logo) como poster/
  fallback antes do vídeo carregar
- Um bloco de texto com fundo sólido verde primário do lado direito, contendo:
  - Selo pequeno: "Clínica Veterinária & Pet Shop"
  - Título: "Bem-vindo à Toca das Patas"
  - Subtítulo: "Higiene, saúde e amor para seu melhor amigo."
  - Parágrafo: "Combinamos medicina veterinária de ponta com cuidado genuíno,
    porque saudade não é opção. Cada consulta, cada procedimento, feito com a
    atenção que seu pet merece."
  - Dois botões: "Fale Conosco no WhatsApp" (primário, dourado) e "Ver Serviços"
    (secundário, contorno, rola até a seção de serviços)

### 4.3 — Sobre a veterinária
- Foto profissional à esquerda, texto à direita
- Rótulo: "Conheça quem cuida do seu pet"
- Título: "Dra. Luiza Santos"
- Selo: "Médica Veterinária — CRMV-SP #12345"
- Parágrafo: "Com 12 anos de experiência em clínica veterinária, Luiza é
  especializada em medicina preventiva e bem-estar animal. Apaixonada por pets
  desde criança, fundou a Toca das Patas para oferecer um espaço acolhedor onde
  cada animal recebe atenção personalizada."
- Citação em destaque (itálico, com borda lateral): "Com Luiza, seu pet não é
  apenas um paciente. É família. Cada consulta é feita com a atenção que você
  merecia receber."

### 4.4 — Faixa de CTA (curta, entre seções)
- "Pronto para cuidar do seu pet?" + "Agende uma consulta ou tire suas dúvidas
  agora mesmo." + botão "Fale no WhatsApp"

### 4.5 — Serviços (grid de cards)
Rótulo: "Nossos Serviços" · Título: "Cuidado completo, do rotineiro ao
especializado" · Subtítulo: "Da rotina clínica à estética, cada serviço existe
por um motivo — e explicamos qual é."

Cada card tem: ícone, título, uma frase descritiva curta, e uma segunda frase
menor (nota educativa) explicando a importância/benefício do serviço. Os 9
cards, nesta ordem:

1. **Rotina do Pet** — Exames periódicos, vacinação, verificação de saúde geral
   e controle de pulgas e carrapatos. _Nota: Pulgas e carrapatos transmitem
   doenças graves — prevenimos antes que apareçam e tratamos rapidamente se já
   estiverem presentes._
2. **Suplementos e Ração** — Rações e suplementos alimentares de alta qualidade
   para cães e gatos de todas as idades. _Nota: Nutrição adequada é a base da
   saúde, do peso e da energia do seu pet._
3. **Acessórios para Pets** — Coleiras, guias, brinquedos, tapetes higiênicos e
   muito mais para o dia a dia do seu companheiro. _Nota: Itens de qualidade
   garantem conforto e segurança em cada passeio._
4. **Castração/Esterilização** — Procedimento seguro que previne tumores e
   controla a população. _Nota: Reduz risco de tumores mamários e uterinos._
5. **Chip de Identificação** — Aumenta as chances de reunir seu pet com você,
   se perdido. _Nota: Identificação permanente, indolor e vitalícia._
6. **Tosa Higiênica** — Previne infecções de pele e acúmulo de parasitas.
   _Nota: Pelagem desorganizada aumenta risco de infecção._
7. **Higiene Oral Profissional** — Remove tártaro e previne doenças
   periodontais. _Nota: Sem higiene dental, cães podem desenvolver problemas
   cardíacos._
8. **Adote seu Pet!** — Resgate e adoção: damos uma chance de lar a animais que
   precisam. _Nota: A Toca das Patas trabalha em parceria com equipes de resgate
   para conectar pets ao amor que merecem._
9. **Hotelzinho para Pets** — Day use ou pernoite: seu pet fica seguro e bem
   cuidado enquanto você viaja. _Nota: Cuidados especiais e medicação contínua
   durante toda a estada._

Importante: **não** mencionar exames de imagem/diagnóstico por imagem (ultrassom,
raio-x) como serviço prestado internamente — o pet shop não tem esse equipamento.

### 4.6 — Faixa de CTA (tema dourado)
- "Higiene oral em dia, coração protegido" + texto sobre risco cardíaco por
  falta de higiene dental + botão "Quero agendar"

### 4.7 — Por que escolher + Depoimentos (mesma seção)
Rótulo: "Por que a Toca das Patas" · Título: "Diferenciais que fazem sentido"

Grid de 4 diferenciais (título curto + frase):
- **Profissionalismo** — Veterinária formada, com mais de 10 anos de experiência
  clínica.
- **Amor aos Animais** — Cada pet recebe atenção individualizada e cuidado
  genuíno.
- **Ambiente Acolhedor** — Espaço limpo, seguro e confortável para seu melhor
  amigo.
- **Educação do Tutor** — Explicamos a importância de cada serviço e cuidado
  preventivo.

Logo abaixo, na mesma seção: Rótulo "Depoimentos" · Título "Quem confia, indica"
· Grid de 3 cards de depoimento (avatar com iniciais, nome, "tutor(a) de [pet]",
citação):
- Marina T., tutora do Thor — "A Dra. Luiza explicou cada detalhe do
  procedimento do meu cachorro. Nunca me senti tão segura deixando ele em uma
  clínica."
- Rafael C., tutor da Mel — "A tosa higiênica virou rotina aqui em casa. A Mel
  sai sempre cheirosa e a equipe é super atenciosa."
- Camila P., tutora do Bento — "Descobrimos um problema no exame de rotina
  antes que virasse algo sério. Só tenho a agradecer."

(Estes depoimentos são fictícios/placeholder — a intenção futura é substituí-los
por avaliações reais do Google.)

### 4.8 — Faixa de CTA (tema verde escuro/sage)
- "Seu pet merece esse cuidado" + "Fale com a gente agora e marque o primeiro
  atendimento." + botão "Falar no WhatsApp"

### 4.9 — Localização & Contato
Rótulo: "Fale Conosco" · Título: "Localização & Contato" (sobre fundo escuro)

Lado esquerdo: cartões de informação (Endereço, WhatsApp, Instagram, Horário) +
um mapa do Google Maps incorporado (iframe) mostrando o endereço.

Lado direito: formulário de contato com campos — Nome completo, E-mail, Telefone/
WhatsApp, Tipo de serviço (select: Consulta / Tosa / Vacinação / Outro),
Mensagem (textarea), checkbox "Desejo receber promoções via WhatsApp", botão
"Enviar mensagem".

O formulário deve **funcionar de verdade** (não ser decorativo): enviar via
requisição HTTP para um serviço de formulário sem backend próprio (ex.:
Web3Forms ou Formspree), mostrar estado de carregamento no botão
("Enviando..." + desabilitado), mostrar mensagem de erro se falhar, e ao
suceder trocar o formulário por uma tela de sucesso ("Mensagem enviada!" +
"Obrigado pelo contato. Retornaremos em breve pelo WhatsApp ou e-mail.").

### 4.10 — Botão flutuante do WhatsApp
Fixo no canto inferior direito, em todas as páginas/momentos do scroll, ícone de
balão de mensagem, cor verde WhatsApp (#25D366), leva direto para
`https://wa.me/5511940013488` com mensagem pré-preenchida.

### 4.11 — Rodapé
4 colunas: (1) logo + nome + "Clínica Veterinária & Pet Shop" + "Com amor e
profissionalismo"; (2) Contato (telefone→WhatsApp, endereço); (3) Redes Sociais
(Instagram, WhatsApp); (4) Links Rápidos (âncoras das seções). Linha final com
copyright e um aviso: "Consulte sempre um veterinário para diagnóstico
profissional."

-----------------------------------------------------------------------------------
## 5. REQUISITOS FUNCIONAIS E TÉCNICOS
-----------------------------------------------------------------------------------

- **Todo número de telefone no site é um link para o WhatsApp** (`wa.me`), nunca
  `tel:`. Regra sem exceção, em qualquer seção.
- Formulário de contato funcional (envio real, não simulado), com estados de
  carregamento/sucesso/erro.
- Vídeo do hero em loop, mudo, autoplay, com fallback/poster em imagem estática,
  e leve o suficiente para não pesar a performance (idealmente < 1.5MB,
  formatos modernos como WebM com fallback MP4 — nunca H.265/HEVC puro, que não
  toca em Chrome/Firefox).
- Animações discretas de "reveal" ao rolar a página (elementos aparecem com fade
  + leve deslocamento vertical conforme entram na viewport) — sutil, não
  exagerado.
- Header sticky com leve sombra, menu mobile em hambúrguer.
- Mapa do Google Maps incorporado via iframe, mostrando o endereço real.
- Site 100% responsivo — mobile, tablet, desktop — testado de verdade, não só
  "deveria funcionar".
- Meta tags básicas de SEO: title, description, Open Graph.
- Sem necessidade de banco de dados, login, ou CMS — é um site estático com um
  formulário que fala com um serviço externo.

-----------------------------------------------------------------------------------
## 6. O QUE EVITAR
-----------------------------------------------------------------------------------

- Não usar imagens/textos genéricos demais que não conectem com o negócio real
  (pet shop + clínica veterinária de bairro, não uma rede grande).
- Não prometer serviços que a clínica não oferece (equipamentos de imagem,
  por exemplo).
- Não deixar o formulário de contato "decorativo" — precisa enviar de verdade.
- Não exagerar em efeitos visuais (parallax pesado, animações longas) que
  comprometam performance ou pareçam "genérico de IA".

===================================================================================
FIM DO BRIEFING
===================================================================================
