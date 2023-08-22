import ApolloClient from 'apollo-boost';

export const apolloClient = ({ apiUrl, token }: Config) => {
	return new ApolloClient({
		uri: apiUrl || 'https://api.flexben.id/graphql',
		request: (operation: any) => {
			if (token) {
				operation.setContext({
					headers: {
						authorization: token ? `Bearer ${token}` : null
					}
				});	
			}
		},
	})
}

interface Config {
    apiUrl?: string;
    token?: string | null;
}