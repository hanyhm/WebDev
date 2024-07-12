const usersRepo = require("../repos/userRepo");

const getAllUsers = async () => {
  return await usersRepo.getAllUsers();
};

module.exports = {
  getAllUsers,
};
