import { gql } from '@apollo/client';
import { authFragment } from '../fragments/fragments';

export const login_mutation = gql`
	mutation accessToken($clientId: String!, $clientSecret: String!, $username: String!, $password: String!, $grantType: String!) {
		accessToken(input: { clientId: $clientId, clientSecret: $clientSecret, username: $username, password: $password, grantType: $grantType }) {
			...authPart
		}
	}
	${authFragment}
`;

export const register_mutation = gql`
	mutation authRegister($clientId: String!, $clientSecret: String!, $grantType: String!, $name: String!, $email: String!, $phone: String!, $username: String!, $password: String!, $password_confirmation: String!) {
		authRegister(input: { clientId: $clientId, clientSecret: $clientSecret, grantType: $grantType, name: $name, email: $email, phone: $phone, username: $username, password: $password, password_confirmation: $password_confirmationh }) {
			...authPart
		}
	}
	${authFragment}
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
