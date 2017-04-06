
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	// var kittySchema = mongoose.Schema({
 //    	name: String
	// });
	console.log('connection yes')

});