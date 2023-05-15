import express from 'express';
import users from './users.js'
import usersPost from './usersPost.js'


const app = express()
const port = 3000

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users-post', (req, res) => {
    res.send(usersPost);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

