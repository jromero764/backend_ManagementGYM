import { Router } from "express";
import { LoginLDAP } from "../controllers/auth.controller";
import { Express } from "express";
const router = Router();

// router.post('/login', Login);
router.get('/test', (req, res) => { res.status(200).json({ response: 'OK' }) })
router.post('/auth', LoginLDAP)
export default router;

