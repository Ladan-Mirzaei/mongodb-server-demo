import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_LINK = process.env.DB_LINK;
console.log(DB_LINK);

const db = mongoose.connect(`${DB_LINK}/note-taking-app`);

export default db;
