const errorHandler = require("../../utils/errorHandler")
const { USER_PASS_WRONG } = require("./utils/users.dict.errors")

const login = (email, password) => {
  if (email === "juan@gmail.com" && password === "123456") {
    return {
      token: 'yyyyyyyyzzzzzzzzzmmmmmmtttttttt'
    }
  }
  throw errorHandler(USER_PASS_WRONG, { fields: "email" })
}

const create = (userData) => {
  return {
    created: true
  }
}


module.exports = {
  login,
  create
}
// option +shift +f para dar formato
