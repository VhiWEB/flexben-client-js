import ApolloClient from 'apollo-boost';
import config from '../config/enviroment';

export const apolloClient = (token: string | null = null) => {
	return new ApolloClient({
		uri: config.api.VITE_API_URL || 'https://flexben-product.stg.embrio.id/graphql',
		request: (operation) => {
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