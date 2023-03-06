import { gql } from '@apollo/client';
import { detailEnrollmentsFragment } from '../fragments/fragments';

export const post_enrollment_mutation = gql`
	mutation postEnrollment($period_id: ID, $id: ID, $is_submitted: Boolean, $benefit_items_ids: Mixed) {
		enrollmentInsert(period_id: $period_id, id: $id, input: { is_submitted: $is_submitted, benefit_items_ids: $benefit_items_ids }) {
			...enrollmentPart
		}
	}
	${detailEnrollmentsFragment}
`;
