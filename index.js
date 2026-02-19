import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import Todos from '#resources/todo/todo.routes.js'

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.use(Todos);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})