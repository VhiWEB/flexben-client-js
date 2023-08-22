import { apolloClient } from './config/apollo';
import { storeDataManagement } from './utils/storage';
import type { Init } from './utils/model';
// import config from './config/enviroment';

import { get_faqs } from './graphql/querys/faq-query';
import { get_user } from './graphql/querys/user-query';
import { get_point } from './graphql/querys/point-query';
import { get_current_periods, get_periods, get_upcoming_periods } from './graphql/querys/period-query';
import { get_all_benefit_items, get_period_benefit_items } from './graphql/querys/benefit-query';
import { get_claims, get_claim_categories, get_detail_claim } from './graphql/querys/claim-query';
import { get_detail_enrollment, get_enrollments } from './graphql/querys/enrollment-query';

import { forgot_password_mutation, login_mutation, reset_password_mutation } from './graphql/mutations/auth-mutations';
import { change_password_mutation, update_user_mutation } from './graphql/mutations/user-mutation';
import { create_claim, delete_claim, update_claim } from './graphql/mutations/claim-mutation';
import { post_enrollment_mutation } from './graphql/mutations/enrollment-mutation';

import { DetailBenefitType, AuthInputType, ChangePasswordPayloadType, ClaimCategoryPaginatorType, ClaimListPaginator, ClaimType, EnrollmentPaylodType, EnrollmentType, ForgotPasswordPayloadType, ResetPasswordPayloadType, AuthUpdateType, ClaimPayloadType, ClaimPayloadUpdateType } from './types';

export default class Flexben {
	private storage = storeDataManagement();

	private get apiKey() {
		return this.storage.getApiKey();
	}

	private get authToken() {
		return this.storage.getAuthToken();
	}

	private get clientId() {
		return this.storage.getClientId();
	}

	private get clientSecret() {
		return this.storage.getClientSecret();
	}

	private get grantType() {
		return this.storage.getGrantType();
	}

	init({ clientId, clientSecret, grantType, apiKey }: Init): void {
		this.storage.setClientId(clientId);
		this.storage.setClientSecret(clientSecret);
		this.storage.setGrantType(grantType);
		this.storage.setApiKey(apiKey);
	}

	setToken({ token }: Init): void {
		this.storage.setAuthToken(token);
	}

	async authLogin({ username, password }: AuthInputType): Promise<AuthInputType | any> {
		try {
			const mutation = apolloClient({ apiUrl: this.apiKey }).mutate({
				mutation: login_mutation,
				variables: {
					clientId: this.clientId,
					clientSecret: this.clientSecret,
					username: username,
					password: password,
					grantType: this.grantType,
				},
			});
			return mutation;
		} catch (err) {
			return err;
		}
	}

	async authRegister({ name, email, phone, username, password, password_confirmation }: AuthInputType): Promise<AuthInputType | any> {
		try {
			const mutation = apolloClient({ apiUrl: this.apiKey }).mutate({
				mutation: login_mutation,
				variables: {
					clientId: this.clientId,
					clientSecret: this.clientSecret,
					name: name,
					email: email,
					phone: phone,
					username: username,
					password: password,
					password_confirmation: password_confirmation,
					grantType: this.grantType,
				},
			});
			return mutation;
		} catch (err) {
			return err;
		}
	}

	async authForgotPassword({ email, url }: ForgotPasswordPayloadType): Promise<ForgotPasswordPayloadType | any> {
		try {
			const mutation = apolloClient({ apiUrl: this.apiKey }).mutate({
				mutation: forgot_password_mutation,
				variables: {
					email: email,
					url: url,
				},
			});
			return mutation;
		} catch (err) {
			return err;
		}
	}

	async authResetPassword({ code, password }: ResetPasswordPayloadType): Promise<ResetPasswordPayloadType | any> {
		try {
			const mutation = apolloClient({ apiUrl: this.apiKey }).mutate({
				mutation: reset_password_mutation,
				variables: {
					code: code,
					password: password,
				},
			});
			return mutation;
		} catch (err) {
			return err;
		}
	}

	async authChangePassword({ current_password, password, password_confirmation }: ChangePasswordPayloadType): Promise<ChangePasswordPayloadType | any> {
		try {
			const mutation = apolloClient({ token: this.authToken}).mutate({
				mutation: change_password_mutation,
				variables: {
					current_password: current_password,
					password: password,
					password_confirmation: password_confirmation
				},
			});
			return mutation;
		} catch (err) {
			return err;
		}
	}

	async authUpdateUser({ name, email, phone, password, password_confirmation, gender, birth_at, avatar }: AuthUpdateType): Promise<AuthUpdateType | any> {
		try {
			const mutation = apolloClient({ apiUrl: this.apiKey, token: this.authToken }).mutate({
				mutation: update_user_mutation,
				variables: {
					name: name,
					email: email,
					phone: phone,
					password: password,
					password_confirmation: password_confirmation,
					gender: gender,
					birth_at: birth_at,
					avatar: avatar,
				},
			});
			return mutation;
		} catch (err) {
			return err;
		}
	}

	async getFaq() {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_faqs,
			});
			if (response) {
				return response;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getPeriods() {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_periods,
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getCurrentPeriod() {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_current_periods,
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getUpcomingPeriod() {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_upcoming_periods,
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getAllBenefits() {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_all_benefit_items,
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getPeriodBenefits({ id }: DetailBenefitType) {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_period_benefit_items,
				variables: {
					period_id: id,
				}
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getEnrollments() {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_enrollments,
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getDetailEnrollment({ id }: EnrollmentType) {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_detail_enrollment,
				variables: {
					period_id: id,
				}
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async createEnrollment({ id, period_id, is_submitted, benefit_items_ids }: EnrollmentPaylodType) {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: post_enrollment_mutation,
				variables: {
					id: id,
					period_id: period_id,
					is_submitted: is_submitted,
					benefit_items_ids: benefit_items_ids
				}
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getClaims({ period_id, first, page }: ClaimListPaginator) {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_claims,
				variables: {
					period_id: period_id,
					first: first,
					page: page,
				}
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getDetailClaim({ id }: ClaimType) {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_detail_claim,
				variables: {
					id: id,
				}
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async createClaim({ name, merchant_name, description, amount, period_id, category_id, transaction_at, receipt, documents }: ClaimPayloadType): Promise<ClaimPayloadType | any> {
		try {
			const mutation = apolloClient({ apiUrl: this.apiKey, token: this.authToken }).mutate({
				mutation: create_claim,
				variables: {
					name: name,
					merchant_name: merchant_name,
					description: description,
					amount: amount,
					period_id: period_id,
					category_id: category_id,
					transaction_at: transaction_at,
					receipt: receipt,
					documents: documents,
				},
			});
			return mutation;
		} catch (err) {
			return err;
		}
	}

	async updateClaim({ id, name, merchant_name, description, amount, period_id, category_id, transaction_at, receipt, documents }: ClaimPayloadUpdateType): Promise<ClaimPayloadUpdateType | any> {
		try {
			const mutation = apolloClient({ apiUrl: this.apiKey, token: this.authToken }).mutate({
				mutation: update_claim,
				variables: {
					id: id,
					name: name,
					merchant_name: merchant_name,
					description: description,
					amount: amount,
					period_id: period_id,
					category_id: category_id,
					transaction_at: transaction_at,
					receipt: receipt,
					documents: documents,
				},
			});
			return mutation;
		} catch (err) {
			return err;
		}
	}

	async deleteClaim({ id }: ClaimType): Promise<ClaimType | any> {
		try {
			const mutation = apolloClient({ apiUrl: this.apiKey, token: this.authToken }).mutate({
				mutation: delete_claim,
				variables: {
					id: id,
				},
			});
			return mutation;
		} catch (err) {
			return err;
		}
	}

	async getClaimCategories({ parent_id, isParent }: ClaimCategoryPaginatorType) {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_claim_categories,
				variables: {
					parent_id: parent_id,
					isParent: isParent
				}
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getUser() {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_user,
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}

	async getPoint() {
		try {
			const response = await apolloClient({ apiUrl: this.apiKey, token: this.authToken }).query({
				query: get_point,
			});
			if (response) {
				return response.data;
			} else {
				throw new Error();
			}
		} catch (error) {
			return error;
		}
	}
}
