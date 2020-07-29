const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3030;
const dotenv = require('dotenv');
dotenv.config();




mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Database Connected");
}).catch(err => {
    console.log("DB Error : ", err);
})


app.use(cors());
app.use(bodyParser.json());


const empRoutes = require('./Routes/routes');
app.use("/api",empRoutes);



const port = PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);