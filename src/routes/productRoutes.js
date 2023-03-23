import express from 'express'
import { createProductController, deleteProductController, getSingleProductController, productPhotoController, updateProductController } from '../controllers/productController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import  formidable from 'express-formidable'

const router=express.Router()


router.post('/create-products',requireSignIn,isAdmin,formidable(), createProductController)

router.put('/update-products/:pid',requireSignIn,isAdmin,formidable(), updateProductController)

router.get('/get-products/:slug',getSingleProductController)

router.get('/products-photo/:pid',productPhotoController)

router.delete('/delete-products/:pid',requireSignIn,isAdmin,deleteProductController)

export default router;