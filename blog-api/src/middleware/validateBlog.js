const validateBlog = (req, res, next) => {
    const errors = [];
    for (const prop in req.body) {
      if (!req.body[prop]) {
        return res.send({ message: "All fields are required" });
      }
    }

    if (!req.body.category?.name) {
      errors.push("category name is required");
    }
    if (req.body.title.length <= 5) {
      errors.push("Length of title should be more than 5 characters");
    }
    if (req.body.title.length > 256) {
      errors.push("Length of title should not be more than 256 characters");
    }

    if (req.body.description.length <= 5) {
      errors.push("Length of description should be more than 5 characters");
    }
    if (req.body.description.length > 256) {
      errors.push("Length of description should not be more than 256 characters");
    }

    if (errors.length) return res.status(422).send({ message: errors });
    return next();
  };

  module.exports = validateBlog;
