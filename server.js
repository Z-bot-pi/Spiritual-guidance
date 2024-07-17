const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const userRoute = require('./routes/userRoute');
app.use('/api/users', userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node server started at port ${port}`));
