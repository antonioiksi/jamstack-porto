Array.prototype.remById = function(id) {
  for (var i = 0; i < this.length; i++) {
    // compare without converting type
      if (this[i].id == id) {
          this.splice(i, 1);
          i--;
          // return this[i];
      }
  }
  return this;
}


const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];
let nextId = 3;

const attendees = [{
  id: 1,
  name: 'soccer',
  age: 10,
  location: 'London'
}, {
  id: 2,
  name: 'baseball',
  age: 10,
  location: 'Lisbon'
}];
let nextAttendeesId = 3;


const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    attendees: () => {
      return attendees;
    },
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId++, name: args.name };
      channels.push(newChannel);
      return newChannel;
    },
    deleteChannel: (root, args) => {
      const id = args.id;
      channels.remById(id);
      return 1;
    },
    addAttendee: (root, {data}) => {
      const newAttendee = { id: nextAttendeesId++, name: data.name, age: data.age, location: data.location };
      attendees.push(newAttendee);
      return newAttendee;
    },
    deleteAttendee: (root, args) => {
      const id = args.id;
      attendees.remById(id);
      return 1;
    },
  },
};

export default resolvers;