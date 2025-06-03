# Banco de Ideias - Backend

Uma plataforma para compartilhamento e colaboração de ideias entre alunos e professores.

## Funcionalidades

- Autenticação e autorização de usuários
- Controle de acesso baseado em funções (Aluno, Professor, Admin)
- Operações CRUD para ideias, comentários, categorias e tags
- Sistema de colaboração e seguimento de ideias
- Comentários aninhados
- Paginação e filtragem
- Validação de dados com Zod
- Rate limiting para proteção contra ataques
- Logs estruturados
- Compressão de respostas
- Headers de segurança

## Stack Tecnológica

- Node.js
- TypeScript
- Express.js
- Prisma (PostgreSQL)
- JWT Authentication
- Zod (Validação)
- Pino (Logging)
- Helmet (Segurança)
- Compression (Performance)
- Rate Limiter Flexible (Proteção)

## Pré-requisitos

- Node.js (v14 ou superior)
- PostgreSQL
- npm ou yarn

## Configuração

1. Clone o repositório:
```bash
git clone <repository-url>
cd banco-de-ideias-backend
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
# Ambiente
NODE_ENV=development

# Servidor
PORT=3000

# Banco de Dados
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/banco_de_ideias?schema=public"

# JWT
JWT_SECRET="sua-chave-super-secreta-mude-em-producao"
JWT_EXPIRES_IN="7d"

# CORS
CORS_ORIGIN="http://localhost:3000"

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
```

4. Configure o banco de dados:
```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Documentação da API

### Autenticação

- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Login do usuário
- `POST /api/auth/logout` - Logout do usuário
- `GET /api/auth/me` - Obter informações do usuário atual

### Usuários

- `GET /api/users` - Listar usuários (Somente Admin)
- `GET /api/users/:id` - Obter detalhes do usuário
- `PUT /api/users/:id` - Atualizar usuário
- `DELETE /api/users/:id` - Remover usuário (Somente Admin)

### Ideias

- `GET /api/ideas` - Listar ideias
- `POST /api/ideas` - Criar ideia
- `GET /api/ideas/:id` - Obter detalhes da ideia
- `PUT /api/ideas/:id` - Atualizar ideia
- `DELETE /api/ideas/:id` - Remover ideia
- `POST /api/ideas/:id/like` - Curtir ideia
- `POST /api/ideas/:id/follow` - Seguir ideia
- `GET /api/ideas/:id/comments` - Listar comentários da ideia

### Comentários

- `POST /api/comments` - Criar comentário
- `PUT /api/comments/:id` - Atualizar comentário
- `DELETE /api/comments/:id` - Remover comentário

### Categorias

- `GET /api/categories` - Listar categorias
- `POST /api/categories` - Criar categoria (Somente Admin)
- `PUT /api/categories/:id` - Atualizar categoria (Somente Admin)
- `DELETE /api/categories/:id` - Remover categoria (Somente Admin)

### Tags

- `GET /api/tags` - Listar tags
- `POST /api/tags` - Criar tag
- `DELETE /api/tags/:id` - Remover tag (Somente Admin)

## Scripts

- `npm run dev` - Iniciar servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm start` - Iniciar servidor de produção
- `npm run lint` - Executar ESLint
- `npm run typecheck` - Verificar tipos TypeScript
- `npm test` - Executar testes

## Segurança

O projeto implementa várias medidas de segurança:

- **Helmet**: Headers de segurança HTTP
- **CORS**: Configuração restritiva de origens
- **Rate Limiting**: Proteção contra ataques de força bruta
- **Validação**: Schemas Zod para validação de entrada
- **Sanitização**: Limite de tamanho para requisições JSON
- **JWT**: Tokens seguros para autenticação
- **Bcrypt**: Hash seguro de senhas
- **Prisma**: Proteção contra SQL injection

## Performance

Otimizações implementadas:

- Compressão de respostas
- Cache headers
- Paginação de resultados
- Índices no banco de dados
- Conexões de banco otimizadas

## Observabilidade

- Logs estruturados com Pino
- Diferentes níveis de log por ambiente
- Rastreamento de erros
- Métricas de rate limiting

## Estrutura do Projeto

```
src/
├── config/         # Configurações
├── middlewares/    # Middlewares Express
├── routes/         # Rotas da API
├── services/       # Lógica de negócios
├── validators/     # Schemas de validação
├── types/          # Tipos TypeScript
└── server.ts       # Entrada da aplicação
```

## Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## Licença

MIT 