//importar biblioteca
const express = require('express');
const path =require('path');
const pages = require('./pages.js');



//iniciando biblioteca
const server = express();

server
    //utilizar body do req
    .use(express.urlencoded({extended: true}))

    //utilizando os arquivos estáticos
    .use(express.static('public'))

    //configurar templete engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //criando uma rota
    .get('/', pages.index)
    .get('/create-orphanage', pages.createOrphanage)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .post('/save-orphanage', pages.saveOrphanage)

//ligando o servidor desligando o live server no VScode 
server.listen(5500)