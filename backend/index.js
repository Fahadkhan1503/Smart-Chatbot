import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import connectDb from './database/db.js';

dotenv.config();
const app = express();

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port ${process.env.PORT}`);
    connectDb()
});

