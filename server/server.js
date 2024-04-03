const express = require('express');
const cors = require('cors')

const routes = require('./router');

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api', routes);

const port = 1300;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});