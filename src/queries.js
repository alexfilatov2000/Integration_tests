const pool = require('./models/db');

module.exports.firstQuery = async () => {
    const data = await pool.query(`SELECT * FROM heroes`)
    return data.rows;
}

module.exports.secondQuery = async () => {
    const data = await pool.query(`
        SELECT powers.hero_id, heroes.name,
        SUM(powers.point) as sum
        FROM heroes
        INNER JOIN powers ON heroes.id = powers.hero_id
        GROUP BY powers.hero_id, heroes.name
        ORDER BY sum DESC, powers.hero_id
        LIMIT 1;
    `)
    return data.rows;
}

