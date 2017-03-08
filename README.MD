[![Build Status](https://travis-ci.org/brenohq/nodejs-shopping-cart.svg?branch=master)](https://travis-ci.org/brenohq/nodejs-shopping-cart)

# NerdStore - Carrinho de Compras - NodeJS/Express
#### Tecnologias Usadas
###### Back-end
Nosso back-end roda em NodeJS 7.2.1, usando Express.js para a criação de rotas. 
Nosso banco de dados é o MongoDB, usando o Moongoose para gerenciar os Schemas que serão salvos no BD.

###### Fron-end
Nosso front-end foi construído com Handlebars.js, uma engine para criação de templates mais semânticos.

###### Testes Unitários
Nossa suite de testes foi feita utilizando o Jasmine.

###### Outros Recursos
Além dessas tecnologias, também usamos Stripe para verificação de cartões de crédito, Passport para autenticação, BCrypt para encriptação da senha no back-end, dentre outros.

#### Instalação
Para rodar essa aplicação em sua máquina, você deve ter NodeJS e MongoDB instalados em sua máquina. Com isso basta navegar até a pasta do projeto e rodar esses dois comandos.

Instala as dependências do projeto:
``` shell
    npm install
```
Roda o script de start da aplicação:
``` shell
    npm start
```

