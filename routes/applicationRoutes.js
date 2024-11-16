import express from 'express'
import ApplicationController from '../controllers/ApplicationController.js'

const applicationRouter=express.Router()

applicationRouter.post('/apply',ApplicationController.apply)

applicationRouter.get('/getapplications',ApplicationController.getStatus)

export default applicationRouter
