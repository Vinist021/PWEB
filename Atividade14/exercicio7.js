let http = require('http');
let server = http.createServer(function(req, res) {
    let opcao = req.url;
    if (opcao == '/historia') {
        res.end("<html><body><h1>História da Fatec Sorocaba</h1></body></html>");
    } else if (opcao == '/cursos') {
        res.end("<html><body><h1>Cursos da Fatec Sorocaba</h1></body></html>");
    } else if (opcao == '/professores') {
        res.end("<html><body><h1>Professores</h1></body></html>");
    }
    else
        res.end("<html><body><h1>Bem-vindo à Fatec Sorocaba</h1></body></html>");
});
server.listen(3000);