const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const Email = require("./models/email");

const EmailQuery = new GraphQLObjectType({
  name: "Email",
  fields: () => ({
    text: { type: GraphQLString },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    PushEmail: {
      type: EmailQuery,
      args: {
        text: { type: GraphQLString },
      },
      resolve(parent, args) {
        let email = new Email({
          text: args.text,
        });
        return email.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  mutation: Mutation,
});
