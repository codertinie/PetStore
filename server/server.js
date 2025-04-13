require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Routes
const petRouter = require('./Routes/PetRoute');
const adoptFormRoute = require('./Routes/AdoptFormRoute');
const adminRoute = require('./Routes/AdminRoute');
// const authRoute = require('./Routes/auth'); 

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static file serving
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
app.use(petRouter);
app.use('/form', adoptFormRoute);
app.use('/admin', adminRoute);
// app.use('/api', authRoute); // <- NEW

// MongoDB Connection
mongoose.connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log('Connected to DB');
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error("DB Connection Failed:", err));
