import { makeExecutableSchema } from 'graphql-tools';
import UserSchema from './schemas/UserSchema';
import ProjectSchema from './schemas/ProjectSchema';
import { UserRepository, ProjectRepository } from '../model/UserModel';

const RootQuery = `
	type RootQuery {
    user(id: String!): User!
		project(id: String!): Project!
  }`;

const SchemaDefinition = `
  schema {
    query: RootQuery
  }
`;

const resolveFunctions = {
    RootQuery: {
        user(obj, { id }) {
            console.log(' Object: ', obj, id);
            return UserRepository.findById(id);
        },
        project(obj, { id }) {
            return ProjectRepository.findById(id);
				}
    },
    Project: {
        owner(object, args) {
            return UserRepository.findById(object.userId)
				}
		}
};

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition, RootQuery, UserSchema, ProjectSchema
    ],
    // we could also concatenate arrays
    // typeDefs: [SchemaDefinition, RootQuery].concat(Post)
    resolvers: resolveFunctions,
});
