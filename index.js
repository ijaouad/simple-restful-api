import express from "express";
import bodyParser from "body-parser";

import usersRouter from "./routes/users.js"


const app = express();


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("welcome to homepage");
});

app.use('/users', usersRouter);


const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))