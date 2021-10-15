// Importa o mongoose para trabalhar com o banco de dados
const mongoose = require("mongoose");

// Função schema do mongoose para gerar a estrutura do banco
const userModel = mongoose.Schema({
  firstName_User: { type: String, required: true },
  lastName_User: { type: String, required: true },
  userName_User: { type: String, required: true },
  password_User: { type: String, required: true },
  lastAccess_User: { type: Date, default: Date.now },
});

//User recebe o modelo de banco (nome e schema)
const User = mongoose.model("Users", userModel);

//Exportar o módulo User.
module.exports = User;
