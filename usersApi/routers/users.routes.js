//Importações
const express = require("express");
const { Mongoose } = require("mongoose");
// const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/users");
// const cors = require("cors");

// Rota inicial
router.get("/", async (req, res) => {
  await User.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send("Ops! Algo deu errado");
      console.log(err);
    });
});

//Rota que busca o Usuário por ID e mostra as informações
router.get("/findById/:id", async (req, res) => {
  // const Id = req.params.id;
  // À implemstar
  // if (!mongoose.Types.ObjectId.isValid(Id)) {
  //   res.status(422).send("ID Inválido");
  //   return;
  // }

  //Compara se existe id e valida se o tipo passado pode ser um id ou não
  await User.findOne({ _id: req.params.id })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res
        .status(400)
        .send({ message: "Usuário não encontrado ou Id inválido." });
      console.log(err);
    });
});

// Rota adiciona um usuário e verifica se os valores estão preechidos.
router.post("/add", async (req, res) => {
  const user = req.body;

  // Verifica se tem algum campo requerido vazio
  if (
    user.firstName_User == undefined ||
    user.lastName_User == undefined ||
    user.userName_User == undefined ||
    user.password_User == undefined
  ) {
    res
      .status(400)
      .send({ message: "Erro! Campo requerido não pode ser vazio." });
    return;
  }

  console.log(user);

  await User.create(req.body)
    .then(() => {
      res.status(200).send("Usuário Cadastrado");
    })
    .catch((err) => {
      res.status(400).send("Cadastro não realizado");
      console.error(err);
    });
});

// Atualiza as informações do usuário
router.put("/update/:id", async (req, res) => {
  const user = req.body;

  // Verifica se tem algum campo requerido vazio
  if (
    user.firstName_User == undefined ||
    user.lastName_User == undefined ||
    user.userName_User == undefined ||
    user.password_User == undefined
  ) {
    res
      .status(400)
      .send({ message: "Erro! Campo requerido não pode ser vazio." });
    return;
  }

  await User.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Ops! Algo deu errado");
      console.log(err);
    });
});

// Deleta um usuário recebendo o id
router.delete("/delete/:id", async (req, res) => { 
  await User.deleteOne({ _id: req.params.id })
  .then((user) => {
    res.status(200).send({message: "Usuário Deletado"});
  }).catch((err) => {
    res.status(400).send({message: "Usuário não deletado"});
    console.log(err);
  });
});

// Exporta o módulo das rotas.
module.exports = router;
