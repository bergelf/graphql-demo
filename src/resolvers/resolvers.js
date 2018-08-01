const events = [
  {
    id: "some_id",
    title: "some title",
    description: "Some description",
    time: "26.06.1966",
    location: "Nydalen",
    hasPayment: true,
    isOfficialEvent: true,
    eventSections: [
      {
        type: "Info",
        key: "info_key",
        data: [
          {
            text: "Some informative text"
          }
        ]
      }
    ]
  }
];

const resolvers = {
  Query: {
    allEvents: () => {
      return events;
    },
    event: (root, { id }) => {
      return events.filter(event => {
        return event.id === id;
      })[0];
    }
  }
};

export default resolvers;
