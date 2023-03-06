import gql from 'graphql-tag';
import { userFragment } from '../fragments/fragments';

export const update_user_mutation = gql`
	mutation updateUserMutation($name: String, $email: String, $phone: String, $password: String, $password_confirmation: String, $gender: String, birth_at: DateTime, $avatar: AttachFileHasOne) {
		authUpdate(input: { name: $name, email: $email, phone: $phone, password: $password, password_confirmation: $password_confirmation, gender: $gender, birth_at: $birth_at, avatar: $avatar }) {
			...userPart
		}
	}
	${userFragment}
`;

export const change_password_mutation = gql`
	mutation authChangePassword($current_password: String!, $password: String!, $password_confirmation: String!) {
		authResetPassword(input: { current_password: $current_password, password: $password, password_confirmation: $password_confirmation }) {
			...userPart
		}
	}
	${userFragment}
`;
