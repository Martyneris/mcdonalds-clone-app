const express = require('express');
const app = express();
const chalk = require('chalk');
const categoriesRoutes = require('./routes/categoriesRoutes');
const menuRoutes = require('./routes/menuRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
require('dotenv').config();
const createAdmin = require('./auth/createAdmin');


mongoose.connect(process.env.DB_HOST);
mongoose.connection
    .once('open', () => console.log('connected to DB'))
    .on('error', () => console.log('error'));
mongoose.Promise = global.Promise;

// create admin user
// argumentai pasiekiami per process.argv
console.log(process.argv);
if (process.argv[2] && process.argv[3]) {
    console.log(634);

    createAdmin(process.argv[2], process.argv[3]);
};

//config
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/categories', categoriesRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api', authRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/client/build'));
    app.get('/*', (req, res) => {
        res.sendFile(__dirname + '/client/build/index.html');
    })
}

const port = process.env.PORT;

const server = app.listen(port, () => {
    console.log(chalk.bgGreen(`server is running on port ${port}`));
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('new user has connected');
});

app.set('socketio', io);
