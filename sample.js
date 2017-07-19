var builder= require ('botbuilder');
var restify= require('restify');


var connector=new builder.ChatConnector();
var bot = new builder.UniversalBot(connector);
var server =restify.createServer();

server.listen(process.env.port|| process.env.port||3978, function(){
console.log('%s listening to %s',server.name, server.url);
server.post('/api/messages', connector.listen());
});
bot.dialog('/',[

function (session) {
builder.Prompts.text(session,'whats your name?');
},
function (session,result){

session.send('Hello, ' + result.response);

}]);