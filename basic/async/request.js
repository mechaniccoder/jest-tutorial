function request(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "seunghwan" });
    }, 10000);
  });
}

module.exports = { request };
