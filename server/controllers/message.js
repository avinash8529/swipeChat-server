const { Message: MessageService } = require('../services');

const getList = async (req, res) => {
  const { doc } = await MessageService.getList();

  return res.send(doc);
};

// eslint-disable-next-line consistent-return
const send = async (req, res) => {
  const { doc } = await MessageService.send(req.body);

  if (doc) {
    return res.send({
      sentStatus: true,
      message: 'sent successfull',
    });
  }
};

module.exports = { getList, send };
