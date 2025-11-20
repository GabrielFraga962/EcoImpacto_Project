# ♻️ EcoImpacto - Transformando Resíduos em Futuro Sustentável

<div align="center">

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Uma plataforma completa para gestão inteligente de pontos de coleta e rastreamento de descarte de resíduos**

Desenvolvido por **Gabriel** | Universidade Presbiteriana Mackenzie (EAD)

</div>

---

## 📋 Sobre o Projeto

**EcoImpacto** é uma aplicação full-stack desenvolvida como projeto extensionista para a disciplina de **Web Mobile** do curso de Análise e Desenvolvimento de Sistemas. A solução tem como objetivo promover o **ODS 12 - Consumo e Produção Responsáveis** da ONU, oferecendo uma plataforma digital para:

- 📍 Cadastrar e mapear pontos de descarte de resíduos
- 📊 Registrar e rastrear descartes realizados
- 📈 Gerar relatórios estatísticos e insights sobre padrões de descarte
- 🌍 Facilitar o acesso da população a locais adequados para descarte consciente

### 🎯 Objetivos de Desenvolvimento Sustentável

Este projeto contribui diretamente para o **ODS 12** ao:
- Promover práticas sustentáveis de gestão de resíduos
- Facilitar a reciclagem e reutilização de materiais
- Conscientizar sobre consumo responsável
- Reduzir o impacto ambiental do descarte inadequado

---

## 🏗️ Arquitetura do Projeto

### Backend (API REST)
- **Framework:** NestJS (Node.js)
- **Banco de Dados:** MongoDB Atlas (NoSQL)
- **ODM:** Mongoose
- **Linguagem:** TypeScript
- **Arquitetura:** Modular (Controllers, Services, Schemas)

### Frontend (SPA)
- **Estrutura:** HTML5 semântico
- **Estilização:** CSS3 customizado com variáveis
- **Lógica:** JavaScript ES6+ (Vanilla)
- **Comunicação:** XMLHttpRequest (API REST)

### Infraestrutura
- **Servidor:** Express (integrado ao NestJS)
- **Porta:** 3000 (padrão)
- **Configuração:** Variáveis de ambiente (.env)

---

## 🚀 Funcionalidades

### 1️⃣ Cadastro de Pontos de Descarte
**Endpoint:** `POST /pontos` | `GET /pontos`

- Registrar novos pontos de coleta com informações completas
- Geolocalização (latitude/longitude) para mapeamento
- Categorização por tipo de local (público/privado)
- Múltiplas categorias de resíduos aceitos
- Listagem de todos os pontos cadastrados

**Campos:**
- Nome do local
- Bairro
- Tipo de local (público/privado)
- Categorias aceitas (plástico, vidro, papel, orgânico, eletrônico)
- Coordenadas GPS

### 2️⃣ Registro de Descartes
**Endpoint:** `POST /registros` | `GET /registros`

- Registrar descartes realizados por usuários
- Vinculação ao ponto de descarte
- Especificação do tipo de resíduo
- Data e horário do descarte
- Histórico completo de descartes

### 3️⃣ Consulta de Histórico
**Endpoint:** `GET /registros?[filtros]`

Sistema avançado de filtragem com query parameters:
- Por nome de usuário
- Por tipo de resíduo
- Por ponto de descarte
- Por data
- Combinação de múltiplos filtros

### 4️⃣ Dashboard de Relatórios
**Endpoint:** `GET /relatorio`

Painel estatístico com agregações em tempo real:
- **Total de pontos cadastrados**
- **Número de usuários ativos**
- **Local mais utilizado** (ranking por volume)
- **Resíduo mais frequente** (análise de padrões)
- **Média diária de descartes** (últimos 30 dias)
- **Crescimento mensal** (comparativo percentual)

---

## 🛠️ Tecnologias e Dependências

### Dependências de Produção
```json
{
  "@nestjs/common": "^11.0.1",
  "@nestjs/config": "^4.0.2",
  "@nestjs/core": "^11.0.1",
  "@nestjs/mongoose": "^11.0.3",
  "@nestjs/platform-express": "^11.0.1",
  "@nestjs/serve-static": "^5.0.4",
  "mongoose": "^8.19.3"
}
```

### Dependências de Desenvolvimento
```json
{
  "@nestjs/cli": "^11.0.0",
  "@nestjs/testing": "^11.0.1",
  "@types/node": "^22.10.7",
  "typescript": "^5.7.3",
  "jest": "^30.0.0",
  "eslint": "^9.18.0",
  "prettier": "^3.4.2"
}
```

---

## ⚙️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+ 
- NPM ou Yarn
- Conta no MongoDB Atlas (gratuita)

### Passo 1: Clone o Repositório
```bash
git clone <seu-repositorio-aqui>
cd ProjetoODS
```

### Passo 2: Instale as Dependências
```bash
npm install
```

### Passo 3: Configure o Banco de Dados

1. Crie uma conta gratuita no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crie um novo cluster
3. Configure o **Network Access** para `0.0.0.0/0` (desenvolvimento)
4. Obtenha sua **Connection String**

### Passo 4: Configure as Variáveis de Ambiente

Crie um arquivo `.env` em `src/.env`:

```env
MONGODB_URI=
```

### Passo 5: Inicie o Servidor
```bash
# Modo desenvolvimento (hot reload)
npm run start:dev

# Modo produção
npm run build
npm run start:prod
```

### Passo 6: Acesse a Aplicação
Abra seu navegador em: **http://localhost:3000**

---

## 📡 Documentação da API

### Pontos de Descarte

#### Criar Ponto
```http
POST /pontos
Content-Type: application/json

{
  "nomeDoLocal": "Ecoponto Central",
  "bairro": "Centro",
  "tipoDeLocal": "público",
  "categoriaDosResiduosAceitos": ["plástico", "vidro", "papel"],
  "geolocalizacao": {
    "lat": -23.5505,
    "lon": -46.6333
  }
}
```

#### Listar Pontos
```http
GET /pontos
```

**Resposta:**
```json
[
  {
    "_id": "673abc123...",
    "nomeDoLocal": "Ecoponto Central",
    "bairro": "Centro",
    "tipoDeLocal": "público",
    "categoriaDosResiduosAceitos": ["plástico", "vidro", "papel"],
    "geolocalizacao": {
      "lat": -23.5505,
      "lon": -46.6333
    }
  }
]
```

### Registros de Descarte

#### Criar Registro
```http
POST /registros
Content-Type: application/json

{
  "nomeDoUsuario": "Gabriel",
  "idDoPontoDeDescarte": "673abc123...",
  "tipoDeResiduo": "plástico",
  "data": "2025-11-20T10:30:00.000Z"
}
```

#### Consultar Histórico
```http
# Todos os registros
GET /registros

# Com filtros
GET /registros?nomeDoUsuario=Gabriel
GET /registros?tipoDeResiduo=plástico
GET /registros?idDoPontoDeDescarte=673abc123...
GET /registros?nomeDoUsuario=Gabriel&tipoDeResiduo=vidro
```

### Relatórios

#### Obter Estatísticas
```http
GET /relatorio
```

**Resposta:**
```json
{
  "totalPontosDeDescarte": 15,
  "totalUsuariosNoSistema": 42,
  "localComMaiorNumeroDeRegistros": "Ecoponto Central",
  "tipoDeResiduoMaisFrequente": "plástico",
  "mediaDescartesPorDiaUltimos30Dias": 3.47,
  "percentualCrescimentoUltimoMes": "23.50%"
}
```

---

## 📂 Estrutura de Diretórios

```
ProjetoODS/
├── src/
│   ├── app.module.ts           # Módulo raiz da aplicação
│   ├── main.ts                 # Ponto de entrada
│   ├── .env                    # Variáveis de ambiente
│   │
│   ├── pontos/                 # Módulo de Pontos
│   │   ├── ponto.schema.ts
│   │   ├── pontos.controller.ts
│   │   ├── pontos.service.ts
│   │   └── pontos.module.ts
│   │
│   ├── registros/              # Módulo de Registros
│   │   ├── registro.schema.ts
│   │   ├── registros.controller.ts
│   │   ├── registros.service.ts
│   │   └── registros.module.ts
│   │
│   ├── relatorio/              # Módulo de Relatórios
│   │   ├── relatorio.controller.ts
│   │   ├── relatorio.service.ts
│   │   └── relatorio.module.ts
│   │
│   └── public/                 # Frontend
│       ├── index.html
│       ├── css/
│       │   └── style.css
│       └── js/
│           └── main.js
│
├── test/                       # Testes E2E
├── package.json
├── tsconfig.json
├── nest-cli.json
└── README.md
```

---

## 🎨 Interface do Usuário

### Design System

**Paleta de Cores:**
- Verde principal: `#00a859` (sustentabilidade)
- Fundo: `#f4f4f4` (neutro claro)
- Cards: `#ffffff` (branco)
- Botões de sucesso: `#28a745`

**Tipografia:**
- Fonte: Arial, sans-serif
- Títulos: Bold, tamanhos variados
- Corpo: Regular, 14-16px

**Espaçamento:**
- Padding de cards: 30px
- Margens entre elementos: 20-30px
- Gap de navegação: 15px

---

## 🧪 Testes

### Executar Testes Unitários
```bash
npm run test
```

### Executar Testes E2E
```bash
npm run test:e2e
```

### Cobertura de Testes
```bash
npm run test:cov
```

---

## 📊 Exemplos de Uso

### Caso de Uso 1: Cadastro de Ecoponto
1. Usuário acessa a tela "Cadastrar Ponto"
2. Preenche informações do local
3. Seleciona tipos de resíduos aceitos
4. Insere coordenadas GPS
5. Sistema valida e salva no banco

### Caso de Uso 2: Registro de Descarte
1. Cidadão identifica-se com nome
2. Seleciona ponto de descarte no dropdown
3. Informa tipo de resíduo descartado
4. Confirma data/hora
5. Sistema registra e atualiza estatísticas

### Caso de Uso 3: Análise de Dados
1. Gestor acessa tela de "Relatório"
2. Visualiza dashboard com KPIs
3. Identifica padrões de descarte
4. Toma decisões baseadas em dados

---

## 🔐 Segurança

- Validação de dados no backend (DTOs)
- Sanitização de entradas de usuário
- Configuração segura do MongoDB
- Variáveis de ambiente para credenciais
- CORS configurável

---

## 🚀 Roadmap Futuro

- [ ] Autenticação de usuários (JWT)
- [ ] Sistema de gamificação (pontos/badges)
- [ ] Integração com APIs de mapas (Google Maps)
- [ ] Notificações push
- [ ] App mobile nativo (React Native)
- [ ] Dashboard administrativo avançado
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Sistema de agendamento de coletas

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é de uso educacional, desenvolvido para fins acadêmicos na Universidade Presbiteriana Mackenzie.

---

## 👨‍💻 Autor

**Gabriel**  
Análise e Desenvolvimento de Sistemas  
Universidade Presbiteriana Mackenzie (EAD)  
Disciplina: Web Mobile

---

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através do repositório.

---

<div align="center">

**♻️ Transformando Resíduos em Futuro Sustentável ♻️**

*Desenvolvido com 💚 para um planeta melhor*

</div>

**Resposta (201 Created):**

```json
{
   "nomeDoLocal": "Parque Ibirapuera (Portão 10)",
   "bairro": "Vila Mariana",
   "tipoDeLocal": "público",
   "categoriaDosResiduosAceitos": [
    "orgânico",
    "plástico",
    "vidro"
  ],
   "geolocalizacao": {
    "lat": -23.5882,
    "lon": -46.6578
  },
  "_id": "673673e4b7c8e9a2b160c1d1",
  "__v": 0
}
```

-----

#### 2\. Registrar um Descarte

`POST /registros`

**Body (raw/JSON):**

```json
{
  "nomeDoUsuario": "Gabriel",
  "idDoPontoDeDescarte": "673673e4b7c8e9a2b160c1d1",
  "tipoDeResiduo": "plástico",
  "data": "2025-11-13T21:45:00.000Z" 
}
```

**Resposta (201 Created):**

```json
{
  "nomeDoUsuario": "Gabriel",
  "idDoPontoDeDescarte": "673673e4b7c8e9a2b160c1d1",
  "tipoDeResiduo": "plástico",
  "data": "2025-11-13T21:45:00.000Z",
  "_id": "673673ffb7c8e9a2b160c1d5",
  "__v": 0
}
```

-----

#### 3\. Consultar Histórico (com filtro)

`GET /registros?tipoDeResiduo=plástico`

**Resposta (200 OK):**

```json
[
  {
    "_id": "673673ffb7c8e9a2b160c1d5",
    "nomeDoUsuario": "Gabriel",
    "idDoPontoDeDescarte": "673673e4b7c8e9a2b160c1d1",
    "tipoDeResiduo": "plástico",
    "data": "2025-11-13T21:45:00.000Z",
    "__v": 0
  }
]
```

-----

#### 4\. Obter Relatório Estatístico

`GET /relatorio`

**Resposta (200 OK):**

```json
{
  "totalPontosDeDescarte": 1,
  "totalUsuariosNoSistema": 1,
  "localComMaiorNumeroDeRegistros": "Parque Ibirapuera (Portão 10)",
  "tipoDeResiduoMaisFrequente": "plástico",
  "mediaDescartesPorDiaUltimos30Dias": 0.03333333333333333,
  "percentualCrescimentoUltimoMes": "Não há dados do mês anterior para comparar"
}
```
