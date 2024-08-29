const generateResponse = (status, res, data) => {
  res.writeHead(status, { "Content-type": "application/json" });
  res.end(JSON.stringify(data));
};

module.exports = generateResponse;
