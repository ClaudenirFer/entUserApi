Esse projeto implementa uma Api que armazena as informações em um banco de dados, inicialmente local, podendo alterar as variáveis DB_URL=””, DB_USER = “”, DB_PASS = “”, DB_DATABASE = “” no arquivo .env para direcionar para o banco em cloud.
Nesta Api temos uma pasta chamada de Conn que está dentro de models, e essa mesma detém a função de conexão com o banco mongo. Além da pasta Conn, dentro de models temos também o módulo Users, que guarda as principais informações do schema e o model do banco.
Temos uma pasta routers que aloca o arquivo users.routers.js, que tem todas as rotas do CRUD. E no diretório raiz, temos além do arquivo index.js que é onde o processo de execução da início, temos o arquivo .env, que não é versionado e por isso um outro de exemplo o arquivo .env.example, para consultas posteriores, sem precisar deixar informação preenchida.

Sobre CRUD:
Temos a rota principal local como localhost:3001 e para trazer as informações do banco será necessário passar a rota /users assim como abaixo: 
localhost:3001/users

Para visualizar todos os usuários, acessar a rota /users como abaixo: 
Método: GET
Rota: localhost:3001/users

Para cadastrar o usuário, acessar a rota /users/add como abaixo: 
Método: POST
Rota: localhost:3001/users/add
Passar o json dessa forma e somente com estes campos. A data será recebida no banco automaticamente e o identificador, o id, será gerado como String pelo mongo nesse padrão: “61679d74a95b6b2740042377”
{
    "firstName_User": "Milena",
    "lastName_User": "Rodrigues",
    "userName_User": "mimi023",
    "password_User": "Mi123"
}

Para pesquisar um usuário pelo identificador acesse a rota users/findbyid e passar o id como abaixo:
Método: GET
Rota: localhost:3001/users/findbyid/61679d74a95b6b2740042377
É só passar o id do usuário como acima.


Para atualizar as informações de um usuário, acessar a rota /users/update e passar o id como abaixo: 
Método: PUT
Rota: localhost:3001/users/update/61679d74a95b6b2740042377
Passar o json no body dessa forma como é mostrado logo abaixo, com os campos (firstName_User, lastName_User, userName_User, password_User) todos preenchidos, pois todos foram implementados como obrigatórios e nesse projeto não implementamos a rota path para permitir atualizações parciais, porém não passar o id e nem propriedade data no json. 
{
    "firstName_User": "Milena",
    "lastName_User": "Rodrigues",
    "userName_User": "mimi023",
    "password_User": "Mi123"
}


Para deletar um usuário, passar o id pela rota users/delete como o exemplo abaixo:
Método: delete
Rota: localhost:3001/users/delete/61679d74a95b6b2740042377

OBS:
Nas operações com id, se o identificador for igual, a operação não será realizada. O mongoose também checa se o id é do tipo válido também.
