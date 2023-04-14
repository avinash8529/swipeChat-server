const { getList } = require('../controllers/users');

module.exports = (router) => {
  router.get('/users', getList);
};
