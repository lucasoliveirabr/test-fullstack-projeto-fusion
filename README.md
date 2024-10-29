<div align="center">
  <h1>Heróis da Marvel</h1>
  <h3>Sistema de gerenciamento de heróis da Marvel</h3>
  <div>
    <img src="https://img.shields.io/badge/React.JS-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React.js" />
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </div>
  <div>
    <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  </div>
  <br />
  <img src="https://github.com/user-attachments/assets/e2e88636-83da-49cb-aeab-859e6bf9c291" alt="Página inicial" />
  <img src="https://github.com/user-attachments/assets/769a78ac-3367-4746-92b7-bb5127163d9e" alt="Página de gerenciamento" />
</div>

## <a name="link">🔗 Link de acesso</a>

https://test-fullstack-projeto-fusion.pages.dev

## <a name="instalacao-e-execucao">🚀 Instalação e execução</a>

Siga as etapas abaixo para configurar o projeto localmente na sua máquina.

**Pré-requisitos**

Certifique-se de ter os seguintes softwares instalados em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)

**Clone o repositório**

> ```bash
> git clone https://github.com/lucasoliveirabr/test-fullstack-projeto-fusion.git
> cd test-fullstack-projeto-fusion
> ```

---

### Back-End

**Baixe e instale as dependências localmente**

> ```bash
> cd backend
> npm install
> ```

**Crie um arquivo .env e insira o texto abaixo**

> ```bash
> DATABASE_URL="SUA_STRING_DE_CONEXAO"
> ```

**Crie a conexão do Prisma com o banco de dados**

> ```bash
> npx prisma migrate dev --name init
> ```

**Execute o projeto**

> ```bash
> npm run start
> ```

- A API ficará disponível para acesso em http://localhost:3000.
- Consulte a documentação da API <a href="https://github.com/lucasoliveirabr/test-fullstack-projeto-fusion/tree/main/backend" title="Documentação da API">aqui</a>.

---

### Front-End

**Baixe e instale as dependências localmente**

> ```bash
> cd frontend
> npm install
> ```

**Execute o projeto**

> ```bash
> npm run dev
> ```

- Abra http://localhost:5173 no seu navegador para visualizar o projeto.

## <a name="link">📜 Créditos</a>

<a href="https://www.flaticon.com/free-icons/marvel" title="marvel icons">Marvel icons created by Freepik - Flaticon</a>