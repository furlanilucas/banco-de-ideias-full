# Banco de Ideias - Monorepo

Este é o monorepo do projeto Banco de Ideias, uma plataforma para compartilhamento e colaboração em ideias inovadoras.

## Estrutura do Projeto

```
banco-de-ideias-monorepo/
├── frontend/         # Aplicação React com Next.js
└── backend/         # API Node.js com Express e Prisma
```

## Tecnologias Utilizadas

### Frontend
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Shadcn/ui para componentes
- NextAuth.js para autenticação
- Axios para requisições HTTP

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT para autenticação

## Começando

### Pré-requisitos
- Node.js 18 ou superior
- PostgreSQL
- npm ou yarn

### Configuração do Frontend

1. Entre na pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

### Configuração do Backend

1. Entre na pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Execute as migrações do banco de dados:
```bash
npx prisma migrate dev
```

5. Inicie o servidor:
```bash
npm run dev
```

A API estará disponível em `http://localhost:3001`

## Variáveis de Ambiente

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

### Backend (.env)
```
DATABASE_URL="postgresql://user:password@localhost:5432/banco_de_ideias?schema=public"
JWT_SECRET=your-jwt-secret
PORT=3001
```

## Scripts Disponíveis

### Frontend
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run test` - Executa os testes

### Backend
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o TypeScript
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run test` - Executa os testes

## Funcionalidades

### Frontend
- Autenticação de usuários
- Criação e gerenciamento de ideias
- Interface responsiva e moderna
- Temas claro/escuro
- Pesquisa e filtros de ideias
- Comentários em ideias
- Perfil de usuário

### Backend
- Autenticação e autorização
- CRUD completo de ideias
- Sistema de comentários
- Categorização de ideias
- API RESTful documentada
- Validação de dados
- Tratamento de erros

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Lucas Furlani - [@furlanilucas](https://github.com/furlanilucas)

Link do projeto: [https://github.com/furlanilucas/banco-de-ideias-full](https://github.com/furlanilucas/banco-de-ideias-full) 
