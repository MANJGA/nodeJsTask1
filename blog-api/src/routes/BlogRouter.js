const router = require("express").Router();
const BlogController = require("../controllers/BlogController");
const validateBlog = require("../middleware/validateBlog");

router
  .route("/")
  .get()
  .post([validateBlog], BlogController.createBlog);

module.exports = router;
