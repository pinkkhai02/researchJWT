const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUserService = async (name, email, password) => {
  try {
    //hash password
    const hashPass = await bcrypt.hash(password, saltRounds);
    //save user
    let result = await User.create({
      name: name,
      email: email,
      password: hashPass,
      role: "user",
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createUserService,
};
