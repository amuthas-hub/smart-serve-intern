const express = require('express');

const cors = require('cors');

const connectDB = require('./config/db');

const logger = require('./middleware/logger');

const userRoutes =
require('./routes/userRoutes');

const providerRoutes =
require('./routes/providerRoutes');

const bookingRoutes =
require('./routes/bookingRoutes');


const app = express();


// DATABASE
connectDB();


// MIDDLEWARE
app.use(express.json());

app.use(cors());

app.use(logger);


// ROUTES
app.use('/api/users', userRoutes);

app.use('/api/providers', providerRoutes);

app.use('/api/bookings', bookingRoutes);


// SERVER
const PORT = 5000;

app.listen(PORT,()=>{

    console.log(
        `Server Running on Port ${PORT}`
    );
});
