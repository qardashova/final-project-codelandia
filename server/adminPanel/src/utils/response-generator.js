const generateBaseResponse = (status, res, data) => {
  res.writeHead(status, { "Content-type": "application/json" });
  res.end(JSON.stringify(data));
};

const generateResponse = (res, result) => {
  if (result.success) {
    return generateBaseResponse(200, res, result);
  } else {
    return generateBaseResponse(400, res, result);
  }
};

module.exports = {
  generateBaseResponse,
  generateResponse,
};
