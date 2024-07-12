const userService = require("../services/usersService");

const getAllUsers = async (req, res) => {
  //HANDLE CONTROLLER STUFF, REQ - RES
  const users = await userService.getAllUsers();
  res.send(users);
};

module.exports = {
  getAllUsers,
};
