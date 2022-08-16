const express = require('express');
const app = express();

const { config } = require('./config/index');

const {
    logErrors,
    errorHandler,
    wrapErrors
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// Body Parser
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Routes
app.use('/api/movies', require('./routes/movies'));

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Listening in port ${config.port}`)
});