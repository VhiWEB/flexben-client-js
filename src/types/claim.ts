import type { UserData } from './user';
import type { PeriodType } from './period';
import type { ClaimCategoryType } from './claim-category';
import type { AttachmentFilesType, AttachmentPayloadType, PaginatorType } from './helper';

export type ClaimType = {
	id: string | number;
	claim_status: string;
	claim_status_color: string;
	claim_number: string;
	merchant_name: string;
	description: string;
	rejected_reason: string;
	amount: string;
	approved_amount: string;
	approved_at: Date;
	transaction_at: Date;
	created_at: Date;
	updated_at: Date;
	receipt: AttachmentFilesType;
	pdf: File;
	documents: Partial<AttachmentFilesType[]>;
	user?: UserData;
	period: PeriodType;
	enrollment: PeriodType;
	category: Partial<ClaimCategoryType>;
};

export type ClaimPayloadType = {
	name: string;
	merchant_name: string;
	description: string;
	amount: string;
	period_id: number;
	category_id: number;
	transaction_at: Date;
	receipt: {
		create: AttachmentPayloadType;
	};
	documents?: { create: AttachmentPayloadType[] };
};

export type ClaimPayloadUpdateType = {
	id?: string;
	name: string;
	merchant_name: string;
	description: string;
	amount: string;
	period_id: number;
	category_id: number;
	transaction_at: string;
	receipt: {
		create: AttachmentPayloadType;
	};
	documents?: { create: AttachmentPayloadType[] };
};

export type ClaimPaginator = {
	paginatorInfo: PaginatorType;
	data: ClaimType[];
};
