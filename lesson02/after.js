const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String
    description: String
    image: String
    price: Int
  }

  type Query {
    product(id: ID!): Product
  }
`;

const resolvers = {};

const mocks = {
  Int: () => 123000
};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false
};
