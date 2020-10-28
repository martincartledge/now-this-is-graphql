const { podracers } = require("./podracers.json");
// Resolvers define the technique for fetching the types defined in the
// schema.

const resolvers = {
  /*
    UNCOMMENT FOR QUERIES
  */
  // Query: {
  //   getAllPodracers: () => podracers,
  //   getSinglePodracer(parent, args, context, info) {
  //     return podracers.find((podracer) => podracer.id === args.id);
  //   },
  // },
  /*
    UNCOMMENT FOR MUTATIONS 
  */
  // Mutation: {
  //   createPodracer: (_, args) => {
  //     podracers.push({ ...args });
  //     /*
  //     Uncomment console.log below to see our new podracer!
  //     */
  //     // console.log("podracers", podracers);
  //     const newPodracer = {
  //       ...args,
  //     };
  //     return newPodracer;
  //   },
  // },
};

module.exports = resolvers;
