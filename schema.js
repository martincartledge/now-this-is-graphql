const { gql } = require("apollo-server");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # UNCOMMENT FOR STAT TYPE

  # type Stat {
  #   length: String
  #   top_speed: String
  #   average_fuel: String
  # }

  # UNCOMMENT FOR WIN TYPE

  # type Win {
  #   title: String
  #   length: String
  # }

  # This "Podracer" type defines the queryable fields for every podracer in our data source.

  # UNCOMMENT FOR PODRACER TYPE

  # type Podracer {
  #   id: String
  #   name: String
  #   location: String
  #   height: String
  #   mass: String
  #   podrace_wins: [Win]
  #   podracer_stats: Stat
  # }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "podracers" query returns an array of zero or more Podracer (defined above).

  # UNCOMMENT FOR QUERY

  # type Query {
  #   getAllPodracers: [Podracer]
  #   getSinglePodracer(id: ID!): Podracer
  # }

  # UNCOMMENT FOR MUTATION

  # type Mutation {
  #   createPodracer(name: String, location: String, id: String!): Podracer
  # }
`;

module.exports = typeDefs;
