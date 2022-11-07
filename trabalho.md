Atividade para alunos da Fiap
Esta atividade poderá ser feita com até 5 integrantes.

- Serviço: 1
  O aluno deve desenvolver duas estruturas de backend , sendo a primeira
  para cadastrar usuários, onde este deva conter os seguintes campos:
  nomeusuario, email, senha, nomecompleto, telefone, datacadastro. Nesta
  estrutura deve haver as seguintes ações:

- cadastrar usuario;
- criptografar a senha;
- autenticar usuário;
- gerar o token com jwt;
- alterar senha.

Este primeiro serviço irá gerar um token todas as vezes que o usuário
logar. Com o token gerado será possível acessar o segundo serviço. Então
quando fizer a requisição de alguma rota do segundo serviço será
necessário passar o token.

- Serviço 2:
  Para a segunda parte da atividade, o aluno deve criar uma estrutura para
  cadastrar e atualizar informações financeiras dos usuários. Neste projeto
  o aluno deve construir o código de tal forma que ao tentar cadastrar ou
  atualizar os dados os usuários, será requisitado o token gerado na
  autenticação do primeiro serviço. As informações financeiras só poderão
  ser cadastras e/ou atualizadas se houver um token válido. Os dados
  financeiros serão:

- nome_banco, tipo_conta, nome_titular, limite_cartao.

Ao finalizar a atividade o aluno deve publicar os dois projetos no seu
github, registar sua entrega no sistema de atividades da fiap e enviar o
link do repositório no email: edilsonbackend@gmail.com

## grupo

Bruno Alves Moreira - 344969
Jonas Rodrigues de Oliveira - 344772
Lucas Esteves Fernandes Diogo - 344774
Rafael Costa da Cruz - 344780
Victor Hugo Fiorotti - 344988

## Executando o projeto:

### Github:

https://github.com/yonahrodrigues/FIAP_trabalho_microservices

### collection postman:

- https://www.getpostman.com/collections/2b3be3238ae7bd04f25b

### Docker comandos:

- microservice clientes:
- cd serviceFinancial/
- docker-compose build
- docker-compose up

- microservice Financeiro:
- cd serviceFinancial/
- docker-compose build
- docker-compose up
