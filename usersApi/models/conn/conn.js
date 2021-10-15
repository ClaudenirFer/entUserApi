//Importa o mongoose
const mongoose = require("mongoose");

//Recebe os parâmetros da Conn e faz a conexão com o banco. Mostra uma mensagem se tudo correr bem, ou um erro, caso a conexão não seja efetuada.
function Conn(url, user, pass, database) {
  mongoose
    .connect(`${url}/${database}`, {
      user: user,
      pass: pass,
      useNewUrlParse: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB has been configured successfully");
    })
    .catch((err) => {
      console.error(err);
    });
}

// Exporta o módulo Conn
module.exports = Conn;
