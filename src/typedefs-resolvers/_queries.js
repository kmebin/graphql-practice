const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID): User

    blogs: [Blog]
  }
`;

module.exports = typeDefs;
