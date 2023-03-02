import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import config from '../config/enviroment';

export const coreApiGql = (query?: any, token: string | null = null) => {

    const httpLink = createHttpLink({
        uri: config.api.VITE_API_URL,
    });

    const authLink = setContext(() => {
        return {
            headers: {
                authorization: token ? `Bearer ${token}` : "",
            }
        }
    });

    const apolloClient = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    return apolloClient.query({ query }).then((response: any) => {
        return response;
    });
}