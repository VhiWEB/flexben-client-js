import gql from 'graphql-tag';

export const login_mutation = gql`
	mutation accessToken($clientId: String!, $clientSecret: String!, $username: String!, $password: String!, $grantType: String!) {
		accessToken(input: { clientId: $clientId, clientSecret: $clientSecret, username: $username, password: $password, grantType: $grantType }) {
			access_token
			refresh_token
			expires_in
			token_type
		}
	}
`;

export const forgot_mutation = gql`
	mutation authForgotPassword($url: String!, $email: String!) {
		authForgotPassword(input: { url: $url, email: $email })
	}
`;
export const reset_mutation = gql`
	mutation authResetPassword($code: String!, $password: String!) {
		authResetPassword(input: { code: $code, password: $password })
	}
`;
