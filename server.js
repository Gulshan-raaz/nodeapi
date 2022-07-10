const express = require('express');
const app = express();
app.use(express.json());
const users = [];

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    const user ={name: req.body.name, password: req.body.password};
    users.push(user);
    res.send({
        message: 'User created successfullys'
    });
}
);

app.post('/users/login', (req, res) => {
    const user ={name: req.body.name, password: req.body.password};
    const userIndex = users.findIndex(u => u.name === user.name);
    if (userIndex === -1) {
        res.status(401).send({
            message: 'User not found'
        });
    }
    else if (users[userIndex].password !== user.password) {
        res.status(401).send({
            message: 'Password is incorrect'
        });
    }
    else {
        res.send({
            message: 'User logged in successfully'
        });
    }
}
);


app.listen(3000, () => console.log('Server started on port 3000'));