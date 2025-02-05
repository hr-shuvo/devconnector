import {Router} from "express";
import {getApplicationStatus, getCurrentUser, updateUser} from "../controllers/userController.js";
import {validateUpdateUserInput} from "../middleware/validationMiddleware.js";
import { authorizePermission} from "../middleware/authMiddleware.js";


const router = Router();

router.get("/current-user", getCurrentUser);
router.put("/update-user", validateUpdateUserInput, updateUser);
router.get("/admin/app-status", authorizePermission('admin'), getApplicationStatus);


export default router;