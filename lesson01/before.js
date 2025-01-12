const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String,
    world: String
  }
`;

const resolvers = {};

const mocks = {};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false
};
