const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/storage/public')));

const noteRoute = require('./route/note');

app.use('/notes', noteRoute);

app.listen(port, () => {
    console.log(`Server runing on localhost:${port}`);
});