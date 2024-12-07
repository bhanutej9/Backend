const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const vendorRoutes = require("./routes/vendorRoutes");  // Correct path
const bodyParser = require('body-parser');
const firmRoutes=require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const app = express();
const port = 5001;

dotenv.config();
mongoose.connect(process.env.mongo)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use('/vendor', vendorRoutes);  // This should work if vendorRoutes is properly imported
app.use('/firm',firmRoutes);
app.use('/product', productRoutes);
app.listen(port, () => {
    console.log(`Server started and running at ${port}`);
});

app.use('/home', (req, res) => {
    res.send("Welcome");
});
