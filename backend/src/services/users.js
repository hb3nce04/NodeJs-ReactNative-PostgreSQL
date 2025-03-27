const db = require("../database/dboperation");

async function getUsers() {
	return await db.getUsers("");
}

module.exports = {
	getUsers
};
