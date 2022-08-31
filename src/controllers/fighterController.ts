import { Request, Response } from "express";
import * as fighterService from '../services/fighterService.js';

export async function postBattle (req: Request, res: Response) {
    const firstUser: string = req.body.firstUser;
    const secondUser: string = req.body.secondUser;
    try {
        const fight = await fighterService.isUser(firstUser, secondUser);
        return res.status(201).send(fight);

    } catch (error) {
        return res.status(500).send(error);
    }
}

export async function getRanking (req: Request, res: Response) {
    try {
        console.log("funfou 2");
        return res.sendStatus(201);

    } catch (error) {
        return res.status(500).send(error);
    }
}