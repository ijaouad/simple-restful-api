import express from "express";
import { addUser, deleteUser, editUser, getAllUsers, getUser } from "../controllers/users.js";

const router = express.Router();


router.get('/', getAllUsers)

router.get('/:id', getUser)

router.post('/', addUser)

router.delete('/:id', deleteUser)

router.patch('/:id', editUser)


export default router