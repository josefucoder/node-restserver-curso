
const express = require('express');

const fs = require('fs');
const path = require('path');

const { verificaTokenImg } = require('../middlewares/autentication');

const app = express();

app.get( '/imagen/:tipo/:img', verificaTokenImg ,(req, res)=>{

    let tipo = req.params.tipo;

    let img = req.params.img;

    let pathImagen = path.resolve(__dirname, `../../uploads/${ tipo }/${ img }`);

    if( fs.existsSync( pathImagen ) ){
        res.sendFile(pathImagen)
    } else {

        let noImage = path.resolve(__dirname, '../assets/no-image-found.jpg');

        res.sendFile(noImage);

    }

});

module.exports = app;