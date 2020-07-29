const express= require('express');
const jwt= require('jsonwebtoken');
const app= express();
app.get('/api', (req, res) => {
    res.json({
      message: 'Welcome User'
    });
  });
  app.post('/api/posts', verifyToken, (req, res) => {  
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if(err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: 'Post Request made',
          authData
        });
      }
    });
  });
  
  app.post('/api/login', (req, res) => {
    // Demo user
    const user = {
      id: 1, 
      username: 'Akash',
      email: 'akash@gmail.com'
    }

app.listen(5000, () => console.log('Server started on port 5000'));