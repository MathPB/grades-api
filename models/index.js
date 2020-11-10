import mongoose from 'mongoose';

const db = Schema({
  id: {type: Number},
});

db.mongoose = mongoose;
db.url = process.env.MONGODB;

export { db };
