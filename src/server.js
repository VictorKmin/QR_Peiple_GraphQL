const {ApolloServer} = require('apollo-server');

module.exports = async () => {

    const rootSchema = `
    schema {
        query: Query,
        mutation: Mutation
    }
    `;

    const server = new ApolloServer({
        typeDefs: [rootSchema],
        resolvers: {}, // TODO
        context({req}) {
            return {}
        }
    });

    console.log(server);
    const {url} = await server.listen({port: 3000});

    console.log(url);
};
