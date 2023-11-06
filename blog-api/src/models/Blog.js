const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, minlength: 5, maxlength: 256, required: true },
    description: { type: String, required: true, minlength: 5, maxlength: 256 },
    // category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    category: {
      name: { type: String, unique: true, minlength: 1, required: true },
      status: { type: Boolean, default: true },
    },
    timestamp: { type: Date, default: Date.now, required: true },
  },
  { versionKey: false }
);

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = { Blog, BlogSchema };
