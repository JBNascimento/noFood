'use strict'
const app = require('../noFood.Api/bin/express');
const variables = require('../noFood.Api/bin/configuration/variables')
app.listen(3000, () =>{
   console.info(`Api inicialidada com sucesso na porta ${variables.Api.port}`);
});