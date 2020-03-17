import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const connectDb = () => {
  return mongoose.connect('mongodb://localhost:27017/mern');
};

const models = {
  User,
  Message,
};

export default models;
export { connectDb }export { connectDb };
;
