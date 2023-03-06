import { UserData } from '.';
import type { AttachmentPayloadType } from './helper';

export type AuthTokenType = {
	access_token: string;
	refresh_token: string;
	expires_in: number;
	token_type: string;
	user: UserData;
	__typename: string;
};

export type AuthInputType = {
	clientId?: Required<string>;
	clientSecret?: Required<string>;
	grantType: string;
	name: string;
	email: string;
	phone?: string | number
	username: string;
	password: string;
	password_confirmation: string;
	is_volunteer: Partial<boolean>;
	volunteer_name: Partial<string>;
	jwt: string;
	__typename: string;
};

export type ForgotMessageType = {
	message: string;
};

export type ForgotPasswordPayloadType = {
	email: Required<string>;
	url: Required<string>;
}; 	

export type ChangePasswordPayloadType = {
	current_password: Required<string>;
	password: Required<string>;
	password_confirmation: Required<string>;
};

export type ResetPasswordPayloadType = {
	code: Required<string>;
	password: Required<string>;
};

export type AuthUpdateType = {
	name?: string;
	email: string;
	phone: string;
	password: string;
	password_confirmation: string;
	gender: string;
	birth_at: Date;
	avatar?: {
		create: AttachmentPayloadType;
	};
};
