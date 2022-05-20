const { gql } = require("apollo-server");
const { blogService } = require("../services");

const typeDefs = gql`
  type Blog {
    _id: ID
    title: String
    content: String
    author: User
  }
`;

const resolvers = {
  Query: {
    blogs: async () => await blogService.getBlogs(),
  },
};

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers,
};
