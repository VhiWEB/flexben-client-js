import { gql } from '@apollo/client';
import { claimFragment } from '../fragments/fragments';

export const delete_claim = gql`
	mutation deleteClaim($id: ID!) {
		claimDelete(id: $id) {
			...claimPart
		}
	}
	${claimFragment}
`;

export const update_claim = gql`
	mutation updateClaim(
		$idClaim: ID!
		$name: String
		$merchantName: String
		$description: String
		$amount: String
		$periodId: Int
		$categoryId: Int
		$transactionAt: DateTime
		$receipt: AttachFileHasOne
		$documents: AttachFileHasMany
	) {
		claimUpdate(
			id: $idClaim,
			input: {
				name: $name
				merchant_name: $merchantName
				description: $description
				amount: $amount
				period_id: $periodId
				category_id: $categoryId
				transaction_at: $transactionAt
				receipt: $receipt
				documents: $documents
			}
		) {
			...claimPart
		}
	}
	${claimFragment}
`;

export const create_claim = gql`
	mutation createClaim(
		$name: String
		$merchantName: String
		$description: String
		$amount: String
		$periodId: Int
		$categoryId: Int
		$transactionAt: DateTime
		$receipt: AttachFileHasOne
		$documents: AttachFileHasMany
	) {
		claimCreate(
			input: {
				name: $name
				merchant_name: $merchantName
				description: $description
				amount: $amount
				period_id: $periodId
				category_id: $categoryId
				transaction_at: $transactionAt
				receipt: $receipt
				documents: $documents
			}
		) {
			...claimPart
		}
	}
	${claimFragment}
`;
