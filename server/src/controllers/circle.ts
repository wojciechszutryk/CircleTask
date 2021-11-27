import mongoose from "mongoose";
import {CircleObject} from "../models/circle";
import { NextFunction,Request, Response } from 'express';

const circle_get_all = (req: Request, res: Response, next: NextFunction) => {
    CircleObject.find()
        .select('_id position text color')
        .exec()
        .then(resp => {
            const circles = resp.map(circle => {
                return{
                    id: circle._id,
                    position: circle.position,
                    text: circle.text,
                    color: circle.color,
                    request:{
                        type: 'GET',
                        url: 'circles/'
                    }
                }
            });
            res.status(200).json(circles);
        })
        .catch((err:any) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
}


const circle_create = (req: Request, res: Response, next: NextFunction) => {
    const circle = new CircleObject({
        _id: new mongoose.Types.ObjectId(),
        position: req.body.position,
        text: req.body.text,
        color: req.body.color,
    });
    circle.save().then(result => {
        res.status(201).json({
            message: 'Created circle successfully',
            createdCircleObject: {
                id: result._id,
                position: result.position,
                text: result.text,
                color: result.color,
                request: {
                    type: 'GET',
                    url: 'circles/'
                }
            },
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

const circle_delete = (req: Request, res: Response, next: NextFunction) => {
    CircleObject.remove({_id: req.params.id})
        .exec()
        .then(() => {
            res.status(200).json({
                message: 'circle deleted',
                request:{
                    type: 'POST',
                    url: 'circles/',
                    body: {
                        position: 'Number',
                        text: 'String',
                        color: 'String'
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
}

export {circle_get_all, circle_create, circle_delete}