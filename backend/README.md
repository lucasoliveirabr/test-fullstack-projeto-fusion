# Documentação da API

## Visão Geral

A API permite que os usuários criem, leiam, atualizem e excluam heróis. A API é baseada em REST e utiliza JSON para troca de dados.

## URL Base

```
http://localhost:3000/api
```

## Endpoints

### 1. Criar Herói

- **URL:** `/heroes`
- **Método:** `POST`
- **Descrição:** Cria um novo herói.
- **Corpo da Requisição:**
  ```json
  {
    "name": "Doutor Estranho",
    "powersAndAbilities": "Magia, Artista Marcial, Manipulação de Energia, Teletransporte, Cronocinese.",
    "origin": "Pensilvânia, Estados Unidos da América, Terra."
  }
  ```
- **Resposta de Sucesso:**
  - **Código:** `201 Created`
  - **Corpo:**
  ```json
  {
    "id": 1,
    "name": "Doutor Estranho",
    "powersAndAbilities": "Magia, Artista Marcial, Manipulação de Energia, Teletransporte, Cronocinese.",
    "origin": "Pensilvânia, Estados Unidos da América, Terra."
  }
  ```

### 2. Listar Heróis

- **URL:** `/heroes`
- **Método:** `GET`
- **Descrição:** Retorna uma lista de todos os heróis.
- **Resposta de Sucesso:**
  - **Código:** `200 OK`
  - **Corpo:**
  ```json
  [
    {
      "id": 1,
      "name": "Doutor Estranho",
      "powersAndAbilities": "Magia, Artista Marcial, Manipulação de Energia, Teletransporte, Cronocinese.",
      "origin": "Pensilvânia, Estados Unidos da América, Terra."
    },
    {
      "id": 2,
      "name": "Homem-Aranha",
      "powersAndAbilities": "Força sobre-humana, Velocidade sobre-humana, Reflexos sobre-humanos, Durabilidade sobre-humana, Fator de cura, Alerta de Sentido de aranha, Sentidos aguçados, Escalar paredes.",
      "origin": "Nova Iorque, Estados Unidos da América, Terra."
    }
  ]
  ```

### 3. Atualizar Herói

- **URL:** `/heroes/{id}`
- **Método:** `PUT`
- **Descrição:** Atualiza um herói existente.
- **Parâmetros de URL:**
  - `id` (obrigatório): ID do herói a ser atualizado.
- **Corpo da Requisição:**
  ```json
  {
    "name": "Homem-Aranha (Miles Morales)",
    "powersAndAbilities": "Geração de Teia, Camuflagem, Choque Elétrico, etc.",
    "origin": "Brooklyn, Nova Iorque, Estados Unidos da América, Terra."
  }
  ```
- **Resposta de Sucesso:**
  - **Código:** `200 OK`
  - **Corpo:**
  ```json
  {
    "id": 2,
    "name": "Homem-Aranha (Miles Morales)",
    "powersAndAbilities": "Geração de Teia, Camuflagem, Choque Elétrico, etc.",
    "origin": "Brooklyn, Nova Iorque, Estados Unidos da América, Terra."
  }
  ```

### 4. Excluir Herói

- **URL:** `/heroes/{id}`
- **Método:** `DELETE`
- **Descrição:** Exclui um herói existente.
- **Parâmetros de URL:**
  - `id` (obrigatório): ID do herói a ser excluído.
- **Resposta de Sucesso:**
  - **Código:** `200 OK`
  - **Corpo:**
  ```json
  {
    "id": 2,
    "name": "Homem-Aranha (Miles Morales)",
    "powersAndAbilities": "Geração de Teia, Camuflagem, Choque Elétrico, etc.",
    "origin": "Brooklyn, Nova Iorque, Estados Unidos da América, Terra."
  }
  ```