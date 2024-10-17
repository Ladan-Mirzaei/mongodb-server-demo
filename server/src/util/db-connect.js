import mongoose from "mongoose";

const db = mongoose.connect("mongodb://127.0.0.1/note-taking-app");

export default db;
