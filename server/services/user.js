const getList = async () => {
  const doc = global.users;

  if (doc) {
    return { doc };
  }

  return { errors: [ { name: 'key-name', messages: 'Something went wrong!' } ] };
};

module.exports = {
  getList,
};
