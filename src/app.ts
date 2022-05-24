
import express from 'express';
import http from "http";
const app = express();
export const port: number = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

export const server = http.createServer(app)
