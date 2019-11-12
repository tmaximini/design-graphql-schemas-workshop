const { gql } = require("apollo-server");

const typeDefs = gql`
  type Image {
    source: String # Url scalar
    description: String
    thumbnailSource(width: Int, height: Int): String # Url scalar
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: ID!
    endCursor: ID!
  }

  type RecommendedProductsEdge {
    node: Product!
    cursor: ID!
  }

  type RecommendedProductsConnection {
    edges: [RecommendedProductsEdge]
    pageInfo: PageInfo!
  }

  type User {
    id: ID!
    name: String!
  }

  type Review {
    user: User
    stars: Int!
    text: String
  }

  type ReviewEdge {
    node: Review!
    cursor: ID!
  }

  type ReviewsConnection {
    edges: [ReviewEdge]
    pageInfo: PageInfo!
  }

  type Product {
    id: ID!
    name: String
    description(format: String, locale: String): String
    imageUrl: String @deprecated(reason: "Use \`image { source }\`.")
    image: Image
    recommendedProducts(
      first: Int!
      after: ID
    ): [RecommendedProductsConnection!]
    reviews(first: Int!, after: ID): [ReviewsConnection!]
  }

  type Query {
    product(id: ID!): Product
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

/**
 * {
  product(id: "abc") {
    image {
      source
    }
    name
		recommendedProducts(first: 5) {
      edges {
        node {
          id
          name
          image {
            source
            description
          }
        }
    	}
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
}
 */
