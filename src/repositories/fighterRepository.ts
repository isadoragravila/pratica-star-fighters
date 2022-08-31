import { connection } from "../databases/database.js";

async function insertUser(user: string) {
    const { rows: result } = await connection.query(`
        INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, 0, 0, 0)
    `, [user]);
}

async function getUser(user: string) {
    const { rows: result } = await connection.query(`
        SELECT * FROM fighters WHERE username = $1
    `, [user]);

    return result.length > 0 ? true : false;
}


const fightRepository = {
    insertUser,
    getUser
}

export default fightRepository;