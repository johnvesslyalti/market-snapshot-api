import { Router } from "express";
import { getSnapshot } from "../controllers/snapshot.controller.js";
const router = Router();
router.get("/snapshot", getSnapshot);
export default router;
