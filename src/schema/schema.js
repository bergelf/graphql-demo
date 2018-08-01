import { gql } from "apollo-server";
import resolvers from "../resolvers/resolvers";

// The GraphQL schema
const typeDefs = gql`
  type SectionData {
    text: String
  }
  type Section {
    type: String
    key: String
    data: [SectionData]
  }
  type Event {
    id: String
    title: String
    description: String
    time: String
    hasPayment: Boolean
    isOfficialEvent: Boolean
    eventSections: [Section]
  }
  type Query {
    allEvents: [Event]
    event(id: String!): Event
  }
`;

const schema = {
  typeDefs,
  resolvers
};

export default schema;
