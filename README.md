# Projeto Catálogo de produtos - PayloadCMS

Este repositório contém o código de um painel admin, feito com payloadCMS, onde é possível criar usuários, produtos, catálogo de produtos e adicionar produtos em um catálogo. 

## Considerações importantes
#### Todas as rotas foram testadas no insomnia
#### Toda a documentação de rotas das rotas, considerando status, objeto de requisição e resposta, parâmetros... foi passada para o ApiDog. Então na raiz deste reporitório tem um arquivo na qual você poderá baixar e importar para o seu ApiDog, então basta acessar o arquivo TestePayloadCMS.apidog.json na raiz deste repositório, baixar o arquivo após sleciona-lo, acessar o ApiDog de forma remota ou localmente, e acessar as rotas, Já estaá com a url de produção setada no ambiente de Prod. 
#### Passa a passo para testar pelo payloadCMS
 - Acesse https://testpayloadcms-production.up.railway.app/admin
 - Crie seu usuário admin
 - Você poderá testar tudo pela UI Admin do PayloadCMS

#### Passo a passo para testar a rest-api pelo ApiDog
- Baixe o arquivo TestePayloadCMS.apidog.json na raiz desse repositório (No final deste repositório há uma iamgem mostrando aonde baixar, caso você não saiba)
- Acesse o [Apidog](https://apidog.com/) entre com a sua conta ou crie uma conta com o google ou github
- Abra o app e clique em importar projeto, escolhe um arquivo APiDog e faça o upload do seu arquivo .json baixado deste repositório, depois é só testar as rotas. 


## Requisitos funcionais

- [ x ] Deve ser possível criar um usuário
- [ x ] Deve ser possível editar um usuário
- [ x ] Deve ser possível excluir um usuário
- [ x ] Deve ser possível listar os usuários
- [ x ] Deve ser possível criar um produto
- [ x ] Deve ser possível editar um produto
- [ x ] Deve ser possível excluir um produto
- [ x ] Deve ser possível listar os produtos
- [ x ] Deve ser possível criar um catálogo
- [ x ] Deve ser possível editar um catálogo
- [ x ] Deve ser possível excluir um catálogo
- [ x ] Deve ser possível listar os catálogos
- [ x ] Deve ser possível listar um catálogo com seus respectivos produtos
- [ x ] Rotas de usuários, produtos e catálogos devem ser autenticadas
 
## Regras de negócio

- [ x ]  Cada produto deve conter as seguintes informações: nome, descrição, preço, quantidade em estoque e data de criação
- [ x ] Preço do produto deve ser guardado como um número que tenha casas decimais no banco de dados. 
  - Ao criar a collection(tabela) dos produtos me deparei com a escolha do tipo do campo preço, ao pesquisar descobri que para valores monetários, como preço, deve ser guardado de uma forma que facilite operações metemáticas, e a solução encontrada foi o double que é atribuído no payloadCMS criando um field number com a opção "step: 0.001". Pois dessa forma é possível guardar números com mais de uma casa decimal
- [ ] O mesmo produto não pode ser cadastrado em catálogos diferentes
- [ ] Produtos devem ser separados por catálogos específicos 
- [ ] Produtos também poderiam ser atribuídos ao usuário que os criou a fim de organização assim como o catálogo pertence a um usuário.
- [ ] Ao criar produtos, deveria ser possível atribuir tanto produtos quanto catálogos a uma tag de um tipo específico de produto, para que ao criar um catálogo e for adicionar produtos, ficasse disponível somente os produtos do tipo do catálogo. Isso facilitaria a criação de catálogos se caso existisse uma grande variedade de produtos. 
- [ ] Somente usuários admin devem conseguir executar certas features como apagar um usuário ou criar outro usuário. 

## Requisitos não funcionais

- [ x ] Dados da aplicação devem ser armazenados em um banco MongoDB
- [ x ] A autenticação devem ser feita via PayloadCMS

## Banco de dados 

- Para existir um catálogo de produtos em um sistema, primeiro deve existir duas entidades, que são os produtos e os catálogos. Porém, porém só existe um catálogo, seja qual for, se existir outra entidade que vá ser ligada a este catálogo. Então concluímos que não existe catálogo sem produtos, então nota-se que existe um relacionamento entre essas duas tabelas que chamamos de muitos para um. Já que uma das regras de negócio do projeto era que um catálogo deveria pertencer a um usuário, então teríamos a relação de um para muitos, na qual um catálogo pode pertencer a um usuário mas um usuário pode criar vários catálogos. Então foi criada a relação nas collections do payload, na qual um catálogo foi criado por um usuário. 
- As demais entidades como produtos e usuários seguiram os demais padrões de seus campos. Como nome e descrição sendo strings e sem relaçoes...

