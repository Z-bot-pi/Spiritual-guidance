require('dotenv').config(); /* This is used to read env file */
const express = require('express');
const app = express();
const dbConfig = require('./config/dbConfig');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const userRoute = require('./routes/userRoute');
app.use('/api/users', userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node server started at port ${port}`));

/*Appointment Route*/

const appointmentRoute = require('./routes/appointmentRoute');


app.use('/api/appointments', appointmentRoute);
