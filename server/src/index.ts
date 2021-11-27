import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'dotenv/config'
import {router as circleRouter} from "./routers/circle";

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
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.use('/circle', circleRouter);

server.use((error:any, req:express.Request, res: express.Response, next:express.NextFunction) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});