import axios from 'axios';
import fightRepository from '../repositories/fighterRepository.js';

export async function isUser(firstUser: string, secondUser: string) {
    try {
        const first = await axios.get(`https://api.github.com/users/${firstUser}/repos`);
        const second = await axios.get(`https://api.github.com/users/${secondUser}/repos`);

        let firstStargazerCount = 0;
        let secondStargazerCount = 0;

        first.data.map(item => {
            firstStargazerCount += item.stargazers_count;
        });

        second.data.map(item => {
            secondStargazerCount += item.stargazers_count;
        });

        const draw: boolean = firstStargazerCount === secondStargazerCount ? true : false;
        const winner = draw ? null : (firstStargazerCount > secondStargazerCount ? firstUser : secondUser);
        const loser = draw ? null : (firstStargazerCount > secondStargazerCount ? secondUser : firstUser);

        const verifFirst = fightRepository.getUser(firstUser);
        const verifSecond = fightRepository.getUser(secondUser);

        if (!verifFirst) {
            fightRepository.insertUser(firstUser);
        }

        if (!verifSecond) {
            fightRepository.insertUser(secondUser);
        }

        


        return {winner, loser, draw};

    } catch (error) {
        return "Usuário não encontrado";
    }
}