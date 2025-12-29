# 📌 Lista de Usuários – JavaScript Assíncrono

Este projeto consiste em uma aplicação frontend simples que consome uma API externa de usuários e exibe as informações em **cards dinâmicos**, aplicando conceitos fundamentais de **JavaScript assíncrono**.

O objetivo é praticar e demonstrar conhecimentos em `fetch`, `Promises`, `async/await`, tratamento de erros e manipulação do DOM — comuns em desafios técnicos para **estágio frontend**.

---

## 🚀 Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- [Random User API](https://randomuser.me)

---

## 📂 Estrutura de Pastas

📁 projeto
├── index.html
├── 📁 style
│ └── style.css
└── 📁 script
└── script.js

yaml
Copiar código

---

## ⚙️ Funcionalidades

- Consumo de API externa de usuários
- Requisições assíncronas utilizando `fetch`
- Tratamento de erros com `try/catch`
- Transformação de dados da API
- Criação dinâmica de cards no DOM
- Exibição de nome, e-mail e foto do usuário
- Indicador de carregamento removido após renderização

---

## 🔄 Funcionamento

1. A aplicação inicia exibindo uma mensagem de carregamento
2. Os dados são buscados de forma assíncrona
3. A resposta HTTP é validada (`response.ok`)
4. Os dados são convertidos para JSON
5. As informações são transformadas para um modelo próprio
6. Os cards são criados dinamicamente no DOM
7. Em caso de erro, a aplicação trata e exibe mensagens no console

---

## 🧠 Conceitos Aplicados

- JavaScript assíncrono
- Promises
- `async` / `await`
- Tratamento de erros
- Consumo de API REST
- Manipulação do DOM
- Separação de responsabilidades (dados x interface)

---

## 📌 Estrutura dos Dados Utilizados

```
{
  nome: "Maria",
  email: "maria@email.com",
  foto: "https://randomuser.me/..."
}

```
▶️ Como Executar
Clone o repositório

Abra o arquivo index.html no navegador

Certifique-se de estar conectado à internet

🎯 Objetivo do Projeto
Projeto desenvolvido com foco em aprendizado prático, simulando um desafio técnico comum em processos seletivos para estágio em desenvolvimento frontend.
