# Toca das Patas — Website

Website profissional para Toca das Patas, clínica veterinária & pet shop localizada no Brooklin Paulista, São Paulo.

## 📋 Estrutura do Projeto

```
toca-das-patas/
├── public/
│   ├── logo/                 # Logotipos e assets de marca
│   ├── images/
│   │   ├── hero/            # Imagens do hero banner
│   │   ├── services/        # Ícones e imagens de serviços
│   │   └── veterinary/      # Fotos da veterinária
│   └── icons/               # Ícones (WhatsApp, telefone, etc)
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   ├── pages/               # Páginas do site (Next.js routing)
│   └── styles/              # CSS global e módulos
├── prompt-site-toca-das-patas.md  # Briefing completo do projeto
└── README.md                # Este arquivo
```

## 🚀 Como Iniciar

### Pré-requisitos
- Node.js 18+ instalado
- Git instalado (recomendado)

### Instalação Local

```bash
# Clone ou navegue até a pasta do projeto
cd "Toca das Patas"

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em: `http://localhost:3000`

## 📝 Comandos Disponíveis

- `npm run dev` — Inicia servidor de desenvolvimento
- `npm run build` — Compila o projeto para produção
- `npm run start` — Inicia servidor de produção
- `npm run lint` — Verifica código com ESLint

## 🎨 Paleta de Cores

As cores do site são baseadas no logotipo oficial. Consulte o arquivo `src/styles/colors.module.css` para ajustar.

## 📸 Imagens

- Imagens genéricas devem ser baixadas de **Unsplash** ou **Pexels**
- Armazene em `public/images/`
- Depois, substitua pelas fotos reais fornecidas pela Luiza

## 🔗 Hospedagem (Vercel)

1. Faça push do código para GitHub
2. Conecte o repositório no Vercel
3. Vercel fará deploy automático a cada push

[Documentação Vercel + Next.js](https://vercel.com/docs/frameworks/nextjs)

## 📋 Checklist de Validação

- [ ] Dados da Luiza validados
- [ ] Fotos profissionais da Luiza
- [ ] Horário de funcionamento confirmado
- [ ] Especialidades veterinárias confirmadas
- [ ] Logo e paleta de cores finalizados
- [ ] Telefone e email revisados
- [ ] Google Maps embed testado

## 📧 Contato

- **Instagram**: @tocadaspatas-brooklin
- **WhatsApp**: 11-94001-3488
- **Endereço**: Rua Catipará, 251 – Brooklin Paulista, São Paulo - SP

---

**Status**: Prototipo em desenvolvimento
**Última atualização**: Agosto 2026
