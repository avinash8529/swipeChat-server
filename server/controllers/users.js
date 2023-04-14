const { User: UserService } = require('../services');

const getList = async (req, res) => {
  const { doc } = await UserService.getList();

  return res.send(doc);
};

module.exports = { getList };
