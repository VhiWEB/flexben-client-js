import { gql } from '@apollo/client';
import { detailEnrollmentsFragment, userFragment, paginatorFragment } from '../fragments/fragments';

/*
 *  ===========
 *  ENROLLMENTS
 *  ===========
 */

export const get_enrollments = gql`
	query get_enrollments {
		getEnrollments {
			data {
				...enrollmentPart
			}
		}
	}
	${detailEnrollmentsFragment}
`;

export const get_detail_enrollment = gql`
	query enrollments($period_id: ID!) {
		enrollment(period_id: $period_id) {
			...enrollmentPart
		}
	}
	${detailEnrollmentsFragment}
`;

export const get_flex_point_history = gql`
	query getFlexPointHistory($period_id: ID, $page: Int, $first: Int) {
		enrollment_logs(period_id: $period_id, page: $page, first: $first) {
			paginatorInfo {
				...paginatorPart
			}
			data {
				id
				name
				code
				# status
				point_before
				point_after
				point_additional_before
				point_additional_after
				created_at
				updated_at
				user {
					...userPart
				}
				period {
					...periodPart
				}
				enrollment {
					...enrollmentPart
				}
			}
		}
	}
	${detailEnrollmentsFragment}, ${userFragment}, ${paginatorFragment}
`;
