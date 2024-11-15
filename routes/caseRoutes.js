import express from 'express';
import { registerCase } from '../controllers/CaseControllers.js';

const caseRouter=express.Router()

caseRouter.post('/registercases',registerCase)

export default caseRouter