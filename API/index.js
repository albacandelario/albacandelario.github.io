const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/v1/ranking/', require('./routes/rankingsRoutes'));
app.use('/v1/items/', require('./routes/itemsRoutes'));
app.use('/v1/shop', require('./routes/shopRoutes'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Carlos corriendose en el puerto ${process.env.PORT}`);
});