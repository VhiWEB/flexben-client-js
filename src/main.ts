import { apolloClient } from './config/apollo';
import { storeDataManagement } from './utils/storage';
import type { Init } from './utils/model';
import config from './config/enviroment';

import { get_faqs } from './graphql/querys/faq-query';
import { get_current_periods, get_periods, get_upcoming_periods } from './graphql/querys/period-query';
import { get_all_benefit_items, get_period_benefit_items } from './graphql/querys/benefit-query';

import { login_mutation } from './graphql/mutations/auth-mutations';

import { DetailBenefitType } from './types/benefit';
import { AuthInputType } from './types/auth';
import { get_detail_enrollment, get_enrollments } from './graphql/querys/enrollment-query';
import { EnrollmentType } from './types';

export default class Flexben {
	private storage = storeDataManagement();

	private get authToken() {
		return this.storage.getAuthToken();
	}

	init({ token }: Init): void {
		this.storage.setAuthToken(token);
	}

	async authLogin({ username, password }: AuthInputType): Promise<AuthInputType | any> {
		try {
			const loginMutate = apolloClient().mutate({
				mutation: login_mutation,
				variables: {
					clientId: config.api.VITE_AUTH_CLIENT_ID,
					clientSecret: config.api.VITE_AUTH_CLIENT_SECRET,
					username: username,
					password: password,
					grantType: config.api.VITE_GRANT_TYPE,
				},
			});
			return loginMutate;
		} catch (err) {
			return err;
		}
	}

	async getFaq() {
		try {
			const response = await apolloClient(this.authToken).query({
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
			const response = await apolloClient(this.authToken).query({
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
			const response = await apolloClient(this.authToken).query({
				query: get_current_periods,
				variables: {},
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
			const response = await apolloClient(this.authToken).query({
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
			const response = await apolloClient(this.authToken).query({
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
			const response = await apolloClient(this.authToken).query({
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

	async getEnrollment() {
		try {
			const response = await apolloClient(this.authToken).query({
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
			const response = await apolloClient(this.authToken).query({
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
}
