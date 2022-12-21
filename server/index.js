import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => PORT, app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
      if (mongoose.connection.readyState === 1) {
         console.log('Successfully connected to MongoDB Atlas cluster');
       } else {
         console.error('Error connecting to MongoDB Atlas cluster', mongoose.connection.readyState);
       }
   }))
   .catch((error) => console.log(error));

// mongoose.set('bufferCommands', false);
