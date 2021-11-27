import mongoose from 'mongoose';

interface CircleObjectInterface {
    _id: string;
    position: number;
    text: string;
    color: string;
}

const circleObject = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    position: mongoose.Schema.Types.Number,
    text: mongoose.Schema.Types.String,
    color: mongoose.Schema.Types.String,

});

const CircleObject = mongoose.model<CircleObjectInterface & mongoose.Document>('circleObject', circleObject);

export {CircleObject};