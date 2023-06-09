import express from "express";
import {requireSignIn,isAdmin} from '../middlewares/authMiddleware.js'
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategory } from "../controllers/categoryController.js";


const router=express.Router()

router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

router.put('/update-category/:id',requireSignIn,isAdmin,updateCategory)

router.get('/category',categoryController)

router.get('/single-category/:slug',singleCategoryController)

router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)

export default router;