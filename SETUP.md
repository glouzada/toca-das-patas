# Guia de Configuração - Toca das Patas Website

## ✅ Estrutura Criada

Parabéns! A estrutura base do site foi criada. Aqui está o que foi gerado:

### Pastas
```
toca-das-patas/
├── public/
│   ├── logo/                 # Sua logo vai aqui
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   └── veterinary/
│   └── icons/
├── src/
│   ├── components/           # Componentes React (Header, Footer, etc)
│   ├── pages/                # Páginas do site
│   └── styles/               # CSS global
```

### Arquivos Criados
- `package.json` — Dependências do projeto
- `next.config.js` — Configuração Next.js
- `tsconfig.json` — TypeScript config
- `.gitignore` — Arquivos a ignorar no Git
- `prompt-site-toca-das-patas.md` — Briefing completo do projeto
- `README.md` — Documentação do projeto

---

## 🚀 Próximos Passos

### 1. Instalar Dependências
```bash
cd "Toca das Patas"
npm install
```

### 2. Rodar Localmente
```bash
npm run dev
```

Acesse: `http://localhost:3000`

### 3. Adicionar Imagens (Temporárias)
Enquanto não tem fotos reais, o site usa imagens genéricas de Unsplash. Depois você substitui.

**Imagens a Download** (Unsplash/Pexels):
1. Veterinária com cachorro — salvar em `public/images/veterinary/`
2. Cachorro feliz em clínica — salvar em `public/images/hero/`
3. Banho/tosa — salvar em `public/images/services/`
4. Ultrassom — salvar em `public/images/services/`
5. Clínica limpa — salvar em `public/images/hero/`

### 4. Adicionar Logo Oficial
Coloque a **Logotipo Oficial.jpg** em: `public/logo/`

---

## 📝 O Que Ainda Precisa Validar com Luiza

- [ ] Nome completo e credenciais (CRMV-SP)
- [ ] Foto profissional da veterinária
- [ ] Horário de funcionamento (dias e horas)
- [ ] Especialidades confirmadas
- [ ] E-mail para receber contatos
- [ ] Paleta de cores final (baseada no logo)

---

## 🎨 Personalizando o Site

### Cores
Abra: `src/styles/globals.css`

Altere as cores root (linhas 7-13):
```css
--color-primary: #8B5A3C;      /* Cor principal */
--color-secondary: #D4A574;    /* Cor secundária */
--color-accent: #2C5F7F;       /* Cor de destaque */
```

### Conteúdo
- Logo: `src/components/Header.tsx:16`
- Textos do Hero: `src/pages/index.tsx:20`
- Dados da Luiza: `src/pages/index.tsx:45`
- WhatsApp: Buscar `5511940013488` para alterar

### Google Maps
Abra: `src/pages/index.tsx:245`

Altere a URL do iframe com o endereço correto.

---

## 📱 Testando Responsividade

No navegador:
1. Abra DevTools (F12)
2. Clique no ícone de celular (toggle device toolbar)
3. Teste em Mobile, Tablet, Desktop

---

## 🔧 Comandos Úteis

```bash
# Rodar dev
npm run dev

# Build para produção
npm build

# Checar erros
npm run lint
```

---

## 🚀 Deploy na Vercel

1. **Push para GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Toca das Patas website"
   git remote add origin https://github.com/seu-usuario/toca-das-patas.git
   git branch -M main
   git push -u origin main
   ```

2. **Conectar ao Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique "Import Project"
   - Conecte seu repositório GitHub
   - Clique Deploy

Pronto! Seu site estará no ar automaticamente. 🎉

---

## 📞 Dados do Cliente (Atualizar)

**WhatsApp:** 11-94001-3488
**Instagram:** @tocadaspatas-brooklin
**Endereço:** Rua Catipará, 251 – Brooklin Paulista, São Paulo - SP, CEP 04561-060

---

## ✨ O Site Tem (Prototipo)

✓ Design moderno e profissional
✓ Responsivo (mobile, tablet, desktop)
✓ Botão WhatsApp flutuante
✓ Seção sobre a veterinária
✓ Grid de serviços com ícones
✓ Mapa do Google integrado
✓ Paleta de cores personalizável
✓ Pronto para deploy na Vercel

---

**Dúvidas?** Consulte `prompt-site-toca-das-patas.md` para o briefing completo.

**Última atualização:** Agosto 2026
