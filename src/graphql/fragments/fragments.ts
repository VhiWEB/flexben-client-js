import { gql } from '@apollo/client';

/*** PAGINATOR FRAGMENT ***/
export const paginatorFragment = gql`
	fragment paginatorPart on PaginatorInfo {
		count
		currentPage
		firstItem
		hasMorePages
		lastItem
		lastPage
		perPage
		total
	}
`;

/*** FILE FRAGMENT ***/
export const fileFragment = gql`
	fragment filePart on File {
		id
		file_name
		title
		description
		image {
			small
			medium
			large
			thumb
		}
	}
`;

/*** BENEFIT FRAGMENT ***/
export const benefitFragment = gql`
	fragment benefitPart on Benefit {
		id
		name
		code
		description
		is_factorable
		is_optional
		is_active
		created_at
		updated_at
	}
`;

/*** BENEFIT ITEMS FRAGMENT ***/
export const benefitItemsFragment = gql`
	fragment benefitItemPart on BenefitItem {
		id
		name
		code
		description
		flex_type
		status
		primary_price
		benefit {
			...benefitPart
		}
		pivot {
			point
		}
		created_at
		updated_at
	}
	${benefitFragment}
`;

/*** COMPANY FRAGMENT ***/
export const companyFragment = gql`
	fragment companyPart on Company {
		id
		name
		code
		benefits {
			...benefitPart
		}
	}
	${benefitFragment}
`;

/*** USER FRAGMENT ***/
export const userFragment = gql`
	fragment userPart on User {
		id
		eid
		employee_status
		name
		division
		email
		phone
		gender
		spouse_gender
		marital_status
		created_at
		updated_at
		birth_date
		hire_date
		avatar {
			...filePart
		}
		company {
			...companyPart
		}
	}
	${companyFragment}, ${fileFragment}
`;

/*** CLAIM CATEGORY PARENT FRAGMENT ***/
export const claimCategoryParentFragment = gql`
	fragment claimCategoryParentPart on ClaimCategory {
		id
		name
		slug
		code
		is_active
		is_required_document
		is_required_receipt
		has_children
		description
		approved_amount
		created_at
		updated_at
	}
`;

/*** CLAIM CATEGORY FRAGMENT ***/
export const claimCategoryFragment = gql`
	fragment claimCategoryPart on ClaimCategory {
		id
		name
		slug
		code
		is_active
		is_required_document
		is_required_receipt
		has_children
		description
		approved_amount
		created_at
		updated_at
		parent {
			...claimCategoryParentPart
		}
	}
	${claimCategoryParentFragment}
`;

/*** PERIOD FRAGMENT ***/
export const periodFragment = gql`
	fragment periodPart on Period {
		id
		name
		start
		end
		enrollment_start
		enrollment_end
		is_active
		is_enrollment_end
		is_enrollment_upcoming
		is_enrollment_progressing
		is_claim_end
		is_claim_upcoming
		is_claim_progressing
		is_period_end
		is_period_upcoming
		is_period_progressing
	}
`;

/*** CLAIM CATEGORY FRAGMENT ***/
export const claimFragment = gql`
	fragment claimPart on Claim {
		id
		claim_status
		claim_status_color
		claim_number
		merchant_name
		description
		rejected_reason
		amount
		approved_amount
		approved_at
		transaction_at
		created_at
		updated_at
		receipt {
			...filePart
		}
		pdf {
			...filePart
		}
		documents {
			...filePart
		}
		user {
			...userPart
		}
		period {
			...periodPart
		}
		# enrollment {
		# 	...periodPart
		# }
		category {
			...claimCategoryPart
		}
	}
	${fileFragment}, ${userFragment}, ${periodFragment}, ${claimCategoryFragment}
`;

/*** DETAIL ENROLLMENT FRAGMENT ***/
export const detailEnrollmentsFragment = gql`
	fragment enrollmentPart on Enrollment {
		id
		name
		is_submitted
		point
		point_additional
		point_total
		point_used
		point_type
		point_percentage
		point_available
		period {
			...periodPart
		}
		user {
			...userPart
		}
		benefit_items {
			...benefitItemPart
		}
		created_at
		updated_at
		submitted_at
	}
	${periodFragment}, ${benefitItemsFragment}, ${userFragment}
`;

/*** POINT FRAGMENT ***/
export const pointFragment = gql`
	fragment pointPart on Point {
		id
		user {
			...userPart
		}
		period {
			...periodPart
		}
		created_at
		updated_at
	}
	${periodFragment}, ${userFragment}
`;

/*** AUTH FRAGMENT ***/
export const authFragment = gql`
	fragment authPart on AuthToken {
		access_token
		refresh_token
		expires_in
		token_type
		user {
			...userPart
		}
	}
	${userFragment}
`;
