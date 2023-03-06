import { gql } from '@apollo/client';
import { paginatorFragment, claimFragment, claimCategoryFragment } from '../fragments/fragments';

/*
 *  ===========
 *  CLAIMS
 *  ===========
 */

export const get_claims = gql`
	query getClaims($period_id: Int, $first: Int!, $page: Int!) {
		claims(period_id: $period_id, first: $first, page: $page) {
			paginatorInfo {
				...paginatorPart
			}
			data {
				...claimPart
			}
		}
	}
	${paginatorFragment}, ${claimFragment}
`;

export const get_detail_claim = gql`
	query getClaim($id: ID) {
		claim(id: $id) {
			...claimPart
		}
	}
	${claimFragment}
`;

export const get_claim_categories = gql`
	query getClaimCategories($parent_id: Int, $isParent: Boolean) {
		claim_categories(parent_id: $parent_id, isParent: $isParent) {
			data {
				...claimCategoryPart
				parent {
					...claimCategoryPart
				}
			}
		}
	}
	${claimCategoryFragment}
`;
