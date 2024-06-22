const { buildSchema } = require('graphql');
const User = require('../Modals/user'); 

const schema = buildSchema(`
  type Query {
    hello: String
    randomNumber: Float
    getUser(id: ID!): User
  }

  type User {
    id: ID
    name: String
    age: Int
  }
`);

const root = {
  hello: () => 'Hello, world!',
  randomNumber: () => Math.random(),
  getUser: async ({ id }) => {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return {
        id: user._id,
        name: user.userName,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = { schema, root };
