const { getList, send } = require('../controllers/message');

module.exports = (router) => {
  router.get('/messages', getList);
  router.post('/message/send', send);
};
