const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
const road = require('./src/routes/routes')
const sendMail = require('./mail')
const path = require('path');
const log  = console.log;

const dbRoute = "mongodb+srv://padarofficial:padar2902@padar-npjua.mongodb.net/padar_animation?retryWrites=true&w=majority";


//EXPRESS INIT
const app = express();
const PORT = 5000;


// Email sent from kontak.js
// Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

// email, name, text
app.post('/email', (req, res) => {
    const { name, email, text } = req.body;
    console.log('Data: ', req.body);

    sendMail( email, name, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.json({ message: 'Email sent!!!' })
        }
    });
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'Kontak.js'));
});



//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(helmet())

app.use('/v1', road)


mongoose.set('useFindAndModify', false)
mongoose.connect(dbRoute, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.once("open", () => console.log("Connected MongoDB Database"))
db.on("error", () => console.error.bind(console, "MongoDB connection error"))


app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))