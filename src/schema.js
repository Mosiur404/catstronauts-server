const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for homepage grid"
    tracksForHome: [Track]
    track(id: ID!): Track
    module(id: ID!): Module
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "Track is a group of modules that does that"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The tracks main author"
    author: Author
    "The tracks image to dispaly on card"
    thumbnail: String
    "The tracks length to complete, in minutes"
    length: Int @deprecated(reason: "use durationInSeconds")
    durationInSeconds: Int
    "The tracks modules this track contains"
    modulesCount: Int
    "the complete description"
    description: String
    "total number of times it has been viewed"
    numberOfViews: Int
    "the tracks array of modules"
    modules: [Module!]!
  }

  type Module {
    id: ID!
    "the modules title"
    title: String!
    "the modules time taken in minutes"
    length: Int @deprecated(reason: "use durationInSeconds")
    durationInSeconds: Int
    "the content of module"
    content: String
    "the url of the video"
    videoUrl: String
  }

  type Author {
    id: ID!
    "Authors first name and last name"
    name: String!
    "Authors profile picture url"
    photo: String
  }
`;

module.exports = typeDefs;
