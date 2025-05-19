import express from "express"
import {getAll, getById, create, update, remove} from "../controllers/ProverbsController.js"
export const router = express.Router()

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

