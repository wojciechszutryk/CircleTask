import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT || 5000;

const server = express();

mongoose.connect('mongodb+srv://admin:'+process.env.MONGODB_PW+'@cluster0.ooyuy.mongodb.net/circles?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as mongoose.ConnectOptions);
mongoose.Promise = global.Promise;

server.use(cors({
    origin: "*"
}))

server.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});