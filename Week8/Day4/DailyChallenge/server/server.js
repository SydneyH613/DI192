const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  const { value } = req.body;
  res.json({
    message: `I received your POST request. This is what you sent me: ${value}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
