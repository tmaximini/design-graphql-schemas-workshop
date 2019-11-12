const { gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    sourceUrl: String # Url scalar
    description: String
    thumbnailUrl(width: Int, height: Int): String # Url scalar
  }

  type StockItem {
    productId: String!
    size: String
    quantity: Int
  }

  enum Currency {
    EUR
    USD
  }

  type Price {
    amount: Int
    currency: Currency
  }

  type Product {
    id: ID!
    name: String
    brand: String
    price(currency: String): Price
    description: String
    descriptionHtml: String
    imageUrl: String @deprecated(reason: "Use \`image { sourceUrl }\` instead.")
    image: Image
    stockItems: [StockItem!]!
  }

  type Query {
    product(id: ID!): Product
  }
`;

const resolvers = {};

const mocks = {
  StockItem: () => ({
    productId: "abc",
    size: "M",
    quantity: 12
  }),
  Price: () => ({
    amount: 1230,
    currency: "EUR"
  })
};

module.exports = {
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false
};
