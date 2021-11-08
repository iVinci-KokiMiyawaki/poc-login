const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
})

app.use('/fetch', (req, res) => {
  res.send([{
    id: 1,
    name: 'name1',
    user_id: 1,
    message: 'Test Message1.',
    created_at: '2021-11-21T08:00:00.000Z',
  },
  {
    id: 2,
    name: 'name2',
    user_id: 2,
    message: 'Test Message2.',
    created_at: '2021-11-22T12:00:00.000Z',
  }]);
})

app.listen(8080, () => console.log(`API is running on http://localhost:8080/login`));
