export type ClaimCategoryType = {
	id: any;
	name: string;
	slug: string;
	code: string;
	is_active: boolean;
	is_required_document: boolean;
	is_required_receipt: boolean;
	has_children: boolean;
	description: string;
	approved_amount: string;
	created_at: Date;
	updated_at: Date;
	parent?: ClaimCategoryType[];
};