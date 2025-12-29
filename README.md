📌 Projeto: Lista de Usuários (JavaScript Assíncrono)

Este projeto tem como objetivo consumir uma API externa de usuários e exibir os dados em cards dinâmicos, aplicando conceitos fundamentais de JavaScript assíncrono, como fetch, Promises e async/await.

O foco principal é demonstrar boa organização de código, tratamento de erros e manipulação do DOM.

🚀 Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES6+)

API externa: Random User API

📂 Estrutura de Pastas
📁 projeto
├── index.html
├── 📁 style
│   └── style.css
└── 📁 script
    └── script.js

⚙️ Funcionalidades

Buscar usuários de uma API externa

Tratar erros de requisição

Converter dados da API para um modelo próprio

Exibir usuários em formato de cards

Mostrar imagem, nome e e-mail do usuário

Remover indicador de carregamento após os dados serem renderizados

🔄 Funcionamento da Aplicação

A aplicação inicia exibindo uma mensagem de carregamento

Os dados são buscados de forma assíncrona usando fetch

A resposta é validada (response.ok)

Os dados são convertidos para JSON

As informações relevantes são transformadas usando map

Os cards são criados dinamicamente no DOM

Em caso de erro, a aplicação trata e exibe mensagens no console

🧠 Conceitos Aplicados

JavaScript assíncrono

Promises

async / await

Tratamento de erros com try/catch

Consumo de API REST

Manipulação do DOM

Separação de responsabilidades (dados x interface)

📌 Exemplo de Estrutura de Dados Utilizada
{
  nome: "João",
  email: "joao@email.com",
  foto: "https://randomuser.me/..."
}

▶️ Como Executar o Projeto

Clone este repositório

Abra o arquivo index.html no navegador

Certifique-se de estar conectado à internet para o consumo da API

🎯 Objetivo do Projeto

Este projeto foi desenvolvido com fins de aprendizado e prática, simulando um desafio técnico comum em processos seletivos para estágio em desenvolvimento frontend.
