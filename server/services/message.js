global.messages = [
  {
    message: 'Hi Abhi',
    sendBy: 'abhijeetxsingh',
    sendTo: 'abhishek',
  },
  {
    message: 'Hello Abhishek',
    sendBy: 'abhishek',
    sendTo: 'abhijeetxsingh',
  },
  {
    message: 'Sab Badia',
    sendBy: 'abhishek',
    sendTo: 'abhijeetxsingh',
  },
];
const getList = async (data) => {
  if (messages) {
    return { doc: messages };
  }

  return { errors: [ { name: 'key-name', messages: 'Something went wrong!' } ] };
};

const send = async (data) => {
  // console.log(data);
  global.messages.push(data);

  return { doc: { sentSucess: true } };
};

module.exports = {
  getList,
  send,
};
