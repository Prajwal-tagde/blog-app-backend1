const express = require('express');
const cors = require('cors');
const ConnectDB = require('./config/db');
const route = require('./routes/blogRoutes');

const app = express();
const port = 8080;

// middlewares
app.use(express.json());
app.use(cors());

// establishing Connection
ConnectDB();

app.use('/api', route);

app.get('/', (req, res) => {
    res.json({msg: "Make fast"});
})



app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})