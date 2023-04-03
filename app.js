const express = require("express")

const router = express.Router()

router.get('/', (req, res) =>{
    res.send("Ola Mundo")
})
router.get('/rota1', (req, res) =>{
    res.send("rota1 :D")
})
router.get('/rota2', (req, res) =>{
    res.send("rota2 :O")
})
router.get('/rota1/vinicius', (req, res) =>{
    res.send("Esta que é a grande sacada!")
})
router.get('/rota2/minecraft', (req, res) =>{
    res.send("1.20 performance update!!")
})



const app = express()
app.use('/', router)

module.exports = app