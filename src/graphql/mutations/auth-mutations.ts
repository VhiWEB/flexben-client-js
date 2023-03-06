import { gql } from '@apollo/client';

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

export const register_mutation = gql`
	mutation authRegister($clientId: String!, $clientSecret: String!, $grantType: String!, $name: String!, $email: String!, $phone: String!, $username: String!, $password: String!, $password_confirmation: String!) {
		authRegister(input: { clientId: $clientId, clientSecret: $clientSecret, grantType: $grantType, name: $name, email: $email, phone: $phone, username: $username, password: $password, password_confirmation: $password_confirmationh }) {
			access_token
			refresh_token
			expires_in
			token_type
		}
	}
`;

export const forgot_password_mutation = gql`
	mutation authForgotPassword($url: String!, $email: String!) {
		authForgotPassword(input: { url: $url, email: $email })
	}
`;

export const reset_password_mutation = gql`
	mutation authResetPassword($code: String!, $password: String!) {
		authResetPassword(input: { code: $code, password: $password })
	}
`;

export const change_password_mutation = gql`
	mutation authChangePassword($current_password: String!, $password: String!, $password_confirmation: String!) {
		authResetPassword(input: { current_password: $current_password, password: $password, password_confirmation: $password_confirmation })
	}
`;
