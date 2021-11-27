"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle_delete = exports.circle_create = exports.circle_get_all = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const circle_1 = require("../models/circle");
const circle_get_all = (req, res, next) => {
    circle_1.CircleObject.find()
        .select('_id position text color')
        .exec()
        .then(resp => {
        const circles = resp.map(circle => {
            return {
                id: circle._id,
                position: circle.position,
                text: circle.text,
                color: circle.color,
                request: {
                    type: 'GET',
                    url: 'circles/'
                }
            };
        });
        res.status(200).json(circles);
    })
        .catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err,
        });
    });
};
exports.circle_get_all = circle_get_all;
const circle_create = (req, res, next) => {
    const circle = new circle_1.CircleObject({
        _id: new mongoose_1.default.Types.ObjectId(),
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
};
exports.circle_create = circle_create;
const circle_delete = (req, res, next) => {
    circle_1.CircleObject.remove({ _id: req.params.id })
        .exec()
        .then(() => {
        res.status(200).json({
            message: 'circle deleted',
            request: {
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
};
exports.circle_delete = circle_delete;
//# sourceMappingURL=circle.js.map