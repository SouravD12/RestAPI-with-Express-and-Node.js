import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);
app.get('/', (req, res) => {
  console.log('FIRST SERVER TEST');
  res.send('Hie from this side');
});
app.listen(PORT, () =>
  console.log(`Server Running on port : http://localhost:${PORT}`)
);
