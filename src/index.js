const express = require('express');
const bodyParser = require('body-parser');
const route = require('./router/route');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
// app.use(express.json())




mongoose.connect("mongodb+srv://cluster:85qKzNsfjqS6Vbmd@cluster0.hia5dfj.mongodb.net/test",
    { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

