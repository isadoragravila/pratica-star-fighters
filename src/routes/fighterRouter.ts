import { Router } from 'express';
import { postBattle, getRanking } from '../controllers/fighterController.js';
import fightValidation from '../middlewares/fightValidate.js';

const router = Router();

router.post('/battle', fightValidation, postBattle);
router.get('/ranking', getRanking);

export default router;