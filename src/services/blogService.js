const Blog = require("../models/Blog");

/**
 * @전체_블로그글_조회
 */
const getBlogs = async () => {
  try {
    const blogs = await Blog.find().populate("author");

    return blogs;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { getBlogs };
