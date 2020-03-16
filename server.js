const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
const road = require('./src/routes/routes')


const dbRoute = "mongodb+srv://padarofficial:padar2902@padar-npjua.mongodb.net/padar_animation?retryWrites=true&w=majority";


//EXPRESS INIT
const app = express();
const PORT = process.env.PORT || 5000;


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