const { getUsers: fetchUsers } = require("../services/users");
const { StatusCodes } = require("http-status-codes");

function getUsers(req, res, next) {
	res.send("");
}

async function listUsers(req, res) {
	try {
		const users = fetchUsers();
		res.json(users);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
			"Error wheng fethcing datas: ",
			error
		);
	}
}

module.exports = {
	getUsers,
	listUsers
};
