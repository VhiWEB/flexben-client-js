import { gql } from '@apollo/client';
import { claimFragment } from '../fragments/fragments';

export const create_claim = gql`
	mutation createClaim(
		$name: String
		$merchant_name: String
		$description: String
		$amount: String
		$period_id: Int
		$category_id: Int
		$transaction_at: DateTime
		$receipt: AttachFileHasOne
		$documents: AttachFileHasMany
	) {
		claimCreate(
			input: {
				name: $name
				merchant_name: $merchant_name
				description: $description
				amount: $amount
				period_id: $period_id
				category_id: $category_id
				transaction_at: $transaction_at
				receipt: $receipt
				documents: $documents
			}
		) {
			...claimPart
		}
	}
	${claimFragment}
`;

export const update_claim = gql`
	mutation updateClaim(
		$id: ID!
		$name: String
		$merchant_name: String
		$description: String
		$amount: String
		$period_id: Int
		$category_id: Int
		$transaction_at: DateTime
		$receipt: AttachFileHasOne
		$documents: AttachFileHasMany
	) {
		claimUpdate(
			id: $id,
			input: {
				name: $name
				merchant_name: $merchant_name
				description: $description
				amount: $amount
				period_id: $period_id
				category_id: $category_id
				transaction_at: $transaction_at
				receipt: $receipt
				documents: $documents
			}
		) {
			...claimPart
		}
	}
	${claimFragment}
`;

export const delete_claim = gql`
	mutation deleteClaim($id: ID!) {
		claimDelete(id: $id) {
			...claimPart
		}
	}
	${claimFragment}
`;
