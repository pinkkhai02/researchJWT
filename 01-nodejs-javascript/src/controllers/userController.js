const { createUserService } = require("../services/userServices");

const createUser = async (req, res) => {
  // controller -> service(tạo data) -> trả phản hồi
  const { name, email, password } = req.body;
  // console.log("check req.body:", req.body);
  const data = await createUserService(name, email, password);
  return res.status(200).json(data);
};

module.exports = {
  createUser,
};
