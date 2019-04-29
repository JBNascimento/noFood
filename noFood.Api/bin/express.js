const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');


const app = express();

//Configurando o parser do express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Config do banco de dados
mongoose.connect(variables.Database.connection);


//Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

module.exports = app;