import { ApolloClient, createNetworkInterface } from 'react-apollo';


// 	http://dev.apollodata.com/react/initialization.html#creating-client
export const createGraphQLClient = () => {
	const networkInterface = createNetworkInterface({
		uri: 'http://localhost:3000/graphql'
	});
	const client = new ApolloClient({
		networkInterface: networkInterface
	});

	return client;
}

