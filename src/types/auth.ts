export type AuthTokenType = {
	access_token: string;
	expires_in: number;
	refresh_token: string;
	token_type: string;
	__typename: string;
};

export type LoginPayloadType = {
	clientId: string;
	clientSecret: string;
	username: string;
	password: string;
	grantType: string;
};

export type ForgotPayloadType = {
	email: Required<string>;
	url: string;
};

export type ForgotMessageType = {
	message: string;
};

export type ResetPayloadType = {
	code: string | string[];
	password: string;
	confirmationPassword?: string;
};
