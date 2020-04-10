Loja Online
======

Loja Online é um sistema backend para gerenciamento de produtos numa loja online, via API.

O sistema foi desenvolvido em NodeJS, usando a linguagem TypeScript e o framework ExpressJS.

Está hospedado no heroku através de integração contínua com o GitHub.

Cluster de banco de dados NoSQL fornecido gratuitamente pela https://www.mongodb.com/

O certificado TLS é fornecido pela https://www.cloudflare.com

# Roadmap
- [x] Restful API
- [x] NodeJS
- [x] Yarn Package Manager
- [x] ExpressJS
- [x] MongoDB
- [x] JWT Validation
- [x] Heroku Hosting
- [x] Swagger Documentation
- [x] Jest Testing
- [ ] Leveled logging
- [ ] Auth manager
- [ ] Responsive SPA UI Frontend

TESTE ONLINE
------------

O sistema encontra-se pronto para utilização no endereço: https://lojadoanderson.herokuapp.com

Para utilizar a API, escolha um dos Tokens abaixo, conforme queira testar as permissões:

### Permissão de Gerente :woman:

> Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkdlcmVudGUiLCJpYXQiOjE1MTYyMzkwMjIsInBlcm1pc3Npb25zIjpbImNyZWF0ZSIsImRlbGV0ZSIsInJlYWQiLCJ1cGRhdGUiXX0.FcZKkbZGixR1TvKCqODi0WF346o0wdQruiqhF9ypGFk

### Permissão de Cliente :sunglasses:

> Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNsaWVudGUiLCJpYXQiOjE1MTYyMzkwMjIsInBlcm1pc3Npb25zIjpbInJlYWQiXX0.a59mTza_lxikUUc43ZT_su89gjOwVhBsQSFg5IOaHPw

REQUERIMENTO
------------

O projeto foi desenvolvido e testado utilizando o NodeJS versão 13.12.0. Não foi testado em versões anteriores.
Para o banco de dados, é recomendado o Cluster MongoDB fornecido online.


INSTALAÇÃO
----------

### Instalação a partir do Arquivo

Clone o repositório ou extraia o arquivo que pode ser baixado clicando [aqui](https://github.com/AndersonBargas/lojaonline/archive/master.zip).

Execute o comando `yarn install`, para que baixe todos os pacotes necessários.
Caso você não tenha o yarn, poderá fazer o download no endereço https://yarnpkg.com/

Após instalar, basta iniciar o ambiente de desenvolvendo com o comando:

```
yarn dev
```

Então você poderá acessar o sistema a partir do seguinte endereço URL:

~~~
http://localhost:8000/
~~~


CONFIGURAÇÃO
------------

### Banco de dados

Edite o arquivo `src/configs/index.ts` para que fique de acordo com o seu banco de dados, por exemplo:

```js
export default {
    // ...
    databaseURL: process.env.MONGODB_URL || '<endereço do banco de dados aqui>',
    // ...
}
```
