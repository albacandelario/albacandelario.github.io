const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/ranking/', require('./routes/rankingsRoutes'));
app.use('/api/v1/items/', require('./routes/itemsRoutes'));
app.use('/api/v1/shop', require('./routes/shopRoutes'));