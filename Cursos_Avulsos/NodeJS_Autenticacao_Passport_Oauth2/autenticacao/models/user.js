const getDB = required('../util/database').getDB;

class User {
  constructor(userName, email, password) {
    this.userName = userName,
    this.email = email,
    this.password = password
  }

  async save() {
    const db = getDb()
    return db.collection('users').insertOne(this)
}
}

module.exports = User;