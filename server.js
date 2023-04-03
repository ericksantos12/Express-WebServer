const app = require('./app.js')

require("dotenv").config({
    path: ".env"
})

app.set('port', process.env.port || 8080);
const server = app.listen(app.get('port'), ()=>{
    console.log(`Servidor Rodando em: http://localhost:${server.address().port}`);
})