const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let cadastro=models.Cadastro;
let inputdado=models.Inputdado;

app.post('/AddTelha',async (req,res)=>{
    let response=await cadastro.findOne({
        where:{id:req.body.produtoID}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        await inputdado.create({
            produtoID: req.body.produtoID,
            qtde: req.body.qtede,
            local: req.body.local,
            status: req.body.status,
            createdAt: new Date(),
            updateAT: new Date()
        });
    }
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando!');
});