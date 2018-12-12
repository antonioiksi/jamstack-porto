import { gql } from 'apollo-server-express';

const typeDefs = gql`
type Channel {
  id: ID!                # "!" denotes a required field
  name: String
}

type Attendee {
  id: ID!                # "!" denotes a required field
  name: String
  location: String
  age: Int
}

input AttendeeInput {
  name: String
  location: String
  age: Int
}

# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
  channels: [Channel]    # "[]" means this is a list of channels
  attendees: [Attendee]
}

# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addChannel(name: String!): Channel
  deleteChannel(id: ID!): Int!
  
  addAttendee(data: AttendeeInput!): Attendee
  deleteAttendee(id: ID!): Int!
}
`;

export default typeDefs;
