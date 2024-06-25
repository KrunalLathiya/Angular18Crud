const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Database connection
const dbUrl = 'mongodb://localhost:27017/ngcrud';
mongoose.connect(dbUrl)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

const businessRoute = require('./routes/business.route');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);

// Static files (optional if you have any static files to serve)
// app.use(express.static(path.join(__dirname, 'public')));

// Example route (optional)
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
