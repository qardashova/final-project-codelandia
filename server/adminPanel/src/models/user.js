class User {
  constructor(requestData) {
    this.username = requestData.username;
    this.password = requestData.password;
    this.fullname = requestData.fullname;
  }
}

module.exports = User;
