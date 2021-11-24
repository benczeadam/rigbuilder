const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/if1zr1', {useNewUrlParser: true});
module.exports = mongoose;