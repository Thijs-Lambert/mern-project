// Express Server
import express from 'express';
import cors from 'cors';

import routes from './routes';
import models, { connectDb } from './models';

const app = express();

// Application-Level Middleware
app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', routes.users);
app.use('/messages', routes.messages);

// Start Server
connectDb().then(async () => {
  app.listen(3000, () => console.log(`Example app listening on port 3000!`));
});
