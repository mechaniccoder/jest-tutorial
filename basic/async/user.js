const { request } = require("./request");

function getUserName(userId) {
  return request("/users/" + userId).then((user) => user.name);
}

module.exports = { getUserName };
