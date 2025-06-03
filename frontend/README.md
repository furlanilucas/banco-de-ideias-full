# Banco de Ideias

Uma aplicação web moderna construída com React, TypeScript e Material-UI para gerenciar e organizar ideias.

## 🚀 Tecnologias

Este projeto foi construído utilizando as seguintes tecnologias:

- [React](https://reactjs.org/) - v18.2.0
- [TypeScript](https://www.typescriptlang.org/) - v5.2.2
- [Vite](https://vitejs.dev/) - v5.0.8
- [Material-UI](https://mui.com/) - v5.15.6
- [React Router DOM](https://reactrouter.com/) - v6.21.3
- [Emotion](https://emotion.sh/) - v11.11.3

## 📁 Estrutura do Projeto

```
src/
├── assets/      # Arquivos estáticos como imagens, ícones, etc.
├── components/  # Componentes reutilizáveis da UI
├── contexts/    # Provedores de contexto do React
├── hooks/       # Hooks personalizados do React
├── pages/       # Páginas/rotas da aplicação
├── services/    # Serviços e integrações externas
├── types/       # Definições de tipos TypeScript
├── utils/       # Funções utilitárias e helpers
├── App.tsx      # Componente principal da aplicação
├── main.tsx     # Ponto de entrada da aplicação
└── routes.tsx   # Configuração de rotas da aplicação
```

## 🚦 Como Começar

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/furlanilucas/BancoDeIdeias-Front.git
cd BancoDeIdeias-Front
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria uma build de produção
- `npm run lint` - Executa verificação de qualidade do código com ESLint
- `npm run preview` - Visualiza a build de produção localmente

## 🛠️ Desenvolvimento

Este projeto utiliza:
- TypeScript para segurança de tipos
- ESLint para qualidade de código
- Material-UI para estilização de componentes
- React Router para navegação
- Emotion para estilização CSS-in-JS

## 🏗️ Build de Produção

Para criar uma build de produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos de build serão gerados no diretório `dist/`

## 📜 Licença

MIT License

## ✨ Como Contribuir

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/SuaFeature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/SuaFeature`)
5. Abra um Pull Request 