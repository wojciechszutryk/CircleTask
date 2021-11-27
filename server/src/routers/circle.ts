import express from "express";
import {circle_create, circle_delete, circle_get_all} from "../controllers/circle";

const router = express.Router();

router.get('/', circle_get_all);
router.post('/', circle_create);
router.delete(`/:id`, circle_delete);

export {router};