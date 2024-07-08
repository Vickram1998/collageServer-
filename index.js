const bodyParser = require("body-parser")
const express= require ("express")
const mongoose= require ("mongoose")
const student = require("./routes/studentRoute")
const professor = require("./routes/professorRoute")
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://vikramsingh2541997:vickram@cluster0.bhpmpvl.mongodb.net/college?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('MongoDB is connected'))
.catch(err => console.log('Failed to connect to MongoDB:', err));


app.use(cors({
    origin: 'https://collage-server.netlify.app', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(cors());
app.use(express.json())


app.use("/students",student)
app.use("/professor",professor)

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})