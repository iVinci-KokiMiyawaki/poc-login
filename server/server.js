const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(cors());

app.post('/login', (req, res) => {
  res.send({
    status: 'success',
    token: 'test123'
  });
})

app.post('/logout', (req, res) => {
  res.send({
    status: 'success'
  });
})

app.get('/fetch', (req, res) => {
  res.send([{
    id: 1,
    user_id: 'test1',
    name: 'name1',
    message: 'Test Message1.',
    created_at: '2021-11-21T08:00:00.000Z',
  },
  {
    id: 2,
    user_id: 'test2',
    name: 'name2',
    message: 'Test Message2.',
    created_at: '2021-11-22T12:00:00.000Z',
  },
  {
    id: 3,
    user_id: 'test3',
    name: 'name3',
    message: 'Test Message3.',
    created_at: '2021-11-22T12:00:00.000Z',
  }]);
})

app.get('/profile/:user_id', (req, res) => {
  res.send([{
    id: 2,
    user_id: 'test2',
    name: 'name2',
    message: 'Test Message2.',
    created_at: '2021-11-22T12:00:00.000Z',
  }]);
})

app.listen(port, () => console.log(`API is running on http://localhost:8080/login`));
