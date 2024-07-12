const client = require('../db/database')
const getAllUsers = async () => {
  await client.connect()
  const db = client.db('mydb')
  const collection = db.collection('users')
  const users = await collection.find({}).toArray()
  await client.close()
  return users;
};

module.exports = {
  getAllUsers,
};
