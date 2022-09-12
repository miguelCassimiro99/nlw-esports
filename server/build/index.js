import express from 'express';
const app = express();
app.Router('/get', (req, res) => {
    return res.json('Hello world');
});
app.listen(3333);
