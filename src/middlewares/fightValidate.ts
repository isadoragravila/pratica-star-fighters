import fightSchema from '../schemas/fightSchema.js';
import { Request, Response, NextFunction } from "express";

async function fightValidation(req: Request, res: Response, next: NextFunction) {
  const validation = fightSchema.validate(req.body);

  if (validation.error) {
    return res.status(422).send(validation.error.details);
  }

  next();
}

export default fightValidation;