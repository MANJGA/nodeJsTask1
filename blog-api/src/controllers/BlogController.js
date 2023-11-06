const { Blog } = require("../models");

exports.createBlog = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
    } = req.body
    const blog = await Blog.create({ title, description, category });
    return res.send(blog);
  } catch (_) {
    return res.send({ msg: "Opps.. Something went wrong" });
  }
};
