// Se o api não estiver local, vai usar as configurações do BD local
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");

// À implementar. Não finalizada.
// Configurar a Lista Branca do Cors para dar permissões para requisição externa, além de localhost
// var whitelist = ['http://localhost:3000', ... ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// };


// Cors local
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const app = express();
// Permite json
app.use(express.json());
app.use(cors(corsOptions));

//Importa a conexão do banco d edados
const Conn = require("./models/conn/conn");

//Variáveis de acesso e configuração para o banco de dados. Está mantido o .env.example para consultar o padrão
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_database = process.env.DB_DATABASE;

// Chama a função Con e passa os parâmetros para a conexão do BD
Conn(db_url, db_user, db_pass, db_database);
const port = 3001;

// Importa o arquivo com as rotas para const usersRouter
const usersRouter = require("./routers/users.routes");
app.use("/users", usersRouter);

app.listen(process.env.PORT || port, () => {
  console.info(`servidor rodando na porta ${port}`);
});
