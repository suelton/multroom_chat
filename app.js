/*importar as configurações do servidor*/
var app = require('./config/server.js');

/*parametrizar a porta de esculta */
app.listen(3000, function(){
    console.log('Servidor online');
});
